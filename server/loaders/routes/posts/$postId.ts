import type {DataLoader} from '@remix-run/core'
import type * as Types from 'types'
import {getPosts, getUsers} from '../../../utils'

const loader: DataLoader = async ({
  params,
}: {
  params: Record<string, string>
}): Promise<{post: Types.Post | null; users: Types.User[]}> => {
  // our URLs have the post ID + title as a slug for SEO purposes
  // but we only need the ID, so let's grab that
  const postId = params.postId.split('-')[0]
  const post = (await getPosts()).find(({id}) => id === postId) ?? null
  const users = await getUsers()
  return {users, post}
}

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
