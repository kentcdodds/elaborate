import type * as FT from '@firebase/firestore-types'
import type {firestore} from 'firebase-admin'

type PostDocumentData = {
  author: FT.DocumentReference<{name: string}>
  createdDate: FT.Timestamp
} & Omit<Types.Post, 'id'>

type Post = {
  id: string
  title: string
  content: string
  author: string
  createdDate: number
  category: string
}

// https://github.com/firebase/firebase-js-sdk/pull/4055
class FixedFirebaseFirestore extends FT.FirebaseFirestore {
  collection<T = FT.DocumentData>(
    collectionPath: string,
  ): FT.CollectionReference<T>
}

type Context = {
  firestore: FixedFirebaseFirestore
}

export {Post, Context, FixedFirebaseFirestore as FirebaseFirestore}
