import firebase from 'firebase-admin'
import 'firebase/firestore'
import 'firebase/auth'
import {Merge} from 'type-fest'
import slugify from '@sindresorhus/slugify'
import type * as Types from 'types'

type UserDocumentData = Omit<Types.User, 'id'>

type PostDocumentData = Merge<
  Omit<Types.Post, 'id'>,
  {
    author: firebase.firestore.DocumentReference<UserDocumentData>
    createdDate: firebase.firestore.Timestamp
  }
>

firebase.initializeApp()

const firestore = firebase.firestore()

async function getPosts(): Promise<Types.Post[]> {
  const postConverter = {
    toFirestore(post: Types.Post) {
      const authorId = post.authorId
      const {id, slug, ...rest} = post
      return {
        ...rest,
        createdDate: new firebase.firestore.Timestamp(post.createdDate, 0),
        author: firestore.doc(`users/${authorId}`),
      }
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot<PostDocumentData>,
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

async function getUsers(): Promise<Types.User[]> {
  const userConverter = {
    toFirestore(user: Types.User) {
      return user
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot<UserDocumentData>,
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
