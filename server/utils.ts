import admin from 'firebase-admin'
import {Merge} from 'type-fest'
import type * as Types from 'types'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const slugify = require('@sindresorhus/slugify')

type UserDocumentData = Omit<Types.User, 'id'>

type PostDocumentData = Merge<
  Omit<Types.Post, 'id'>,
  {
    author: admin.firestore.DocumentReference<UserDocumentData>
    createdDate: admin.firestore.Timestamp
  }
>

async function getPosts(
  firestore: admin.firestore.Firestore,
): Promise<Types.Post[]> {
  const postConverter = {
    toFirestore(post: Types.Post) {
      const authorId = post.authorId
      const {id, slug, ...rest} = post
      return {
        ...rest,
        createdDate: new admin.firestore.Timestamp(post.createdDate, 0),
        author: firestore.doc(`users/${authorId}`),
      }
    },
    fromFirestore(
      snapshot: admin.firestore.QueryDocumentSnapshot<PostDocumentData>,
    ): Types.Post {
      const {author, ...data} = snapshot.data()
      const authorId = author.id
      const createdDate = data.createdDate.toDate().getTime()
      const {id} = snapshot
      return {
        ...data,
        id,
        slug: `${id}-${slugify(data.title)}`,
        authorId,
        createdDate,
      }
    },
  }

  return (
    await firestore
      .collection('posts')
      .withConverter<Types.Post>(postConverter)
      .get()
  ).docs.map(doc => doc.data())
}

async function getUsers(
  firestore: admin.firestore.Firestore,
): Promise<Types.User[]> {
  const userConverter = {
    toFirestore(user: Types.User) {
      return user
    },
    fromFirestore(
      snapshot: admin.firestore.QueryDocumentSnapshot<UserDocumentData>,
    ) {
      return {...snapshot.data(), id: snapshot.id}
    },
  }
  return (
    await firestore
      .collection('users')
      .withConverter<Types.User>(userConverter)
      .get()
  ).docs.map(doc => doc.data())
}

export {getPosts, getUsers}
