import type {DataLoader} from '@remix-run/core'
import type * as Types from 'types'
import {getPosts, getUsers} from '../../../utils'

const loader: DataLoader = async ({
  params,
}: {
  params: Record<string, string>
}): Promise<{posts: Types.Post[]; users: Types.User[]}> => {
  const posts = (await getPosts()).filter(
    ({category}) => category === params.categoryId,
  )
  const users = await getUsers()
  return {users, posts}
}

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
