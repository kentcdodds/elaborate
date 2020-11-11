import type {DataLoader} from '@remix-run/core'
import type * as FT from '@firebase/firestore-types'
import type * as Types from 'types'

type ArticleDocumentData = {
  author: FT.DocumentReference<{name: string}>
  createdDate: FT.Timestamp
} & Omit<Types.Article, 'id'>

const loader: DataLoader = async ({
  params,
  context,
}: {
  params: Record<string, string>
  context: Types.Context
}): Promise<Types.Article | null> => {
  const snapshot = await context.firestore
    .collection<ArticleDocumentData>('posts')
    .get()
  const posts = await Promise.all(snapshot.docs.map(toArticle))
  return posts.find(({id}) => id === params.postId) ?? null
}

async function toArticle(
  doc: FT.QueryDocumentSnapshot<ArticleDocumentData>,
): Promise<Types.Article> {
  const data = doc.data()
  const author = (await data.author.get()).data()?.name ?? 'Unknown'
  const createdDate = data.createdDate.toDate().getTime()
  const {title, content, category} = data
  return {id: doc.id, createdDate, author, title, content, category}
}

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
