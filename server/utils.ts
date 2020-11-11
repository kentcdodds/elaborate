import type * as FT from '@firebase/firestore-types'
import type * as Types from 'types'

type PostDocumentData = {
  author: FT.DocumentReference<{name: string}>
  createdDate: FT.Timestamp
} & Omit<Types.Post, 'id'>

async function getPosts(
  firestore: Types.FirebaseFirestore,
): Promise<Types.Post[]> {
  const snapshot = await firestore.collection<PostDocumentData>('posts').get()
  const posts = await Promise.all(snapshot.docs.map(toPost))
  return posts
}

async function toPost(
  doc: FT.QueryDocumentSnapshot<PostDocumentData>,
): Promise<Types.Post> {
  const data = doc.data()
  const author = (await data.author.get()).data()?.name ?? 'Unknown'
  const createdDate = data.createdDate.toDate().getTime()
  const {title, content, category} = data
  return {id: doc.id, createdDate, author, title, content, category}
}

export {getPosts}
