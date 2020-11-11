import type {DataLoader} from '@remix-run/core'
import type * as Types from 'types'
import {getPosts} from '../../../utils'

const loader: DataLoader = async ({
  params,
  context,
}: {
  params: Record<string, string>
  context: Types.Context
}): Promise<Types.Article | null> => {
  const posts = await getPosts(context.firestore)
  return posts.find(({id}) => id === params.postId) ?? null
}

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
