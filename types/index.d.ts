import type * as FT from '@firebase/firestore-types'
import type {firestore} from 'firebase'

type Post = {
  id: string
  slug: string
  title: string
  content: string
  authorId: string
  createdDate: number
  category: string
}

type User = {
  id: string
  name: string
}

export {Post, User}
