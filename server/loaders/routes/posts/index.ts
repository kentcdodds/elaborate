import type {DataLoader} from '@remix-run/core'
import type * as Types from 'types'
import {getPosts, getUsers} from '../../../utils'

const loader: DataLoader = async (): Promise<{
  posts: Types.Post[]
  users: Types.User[]
}> => {
  const posts = await getPosts()
  const users = await getUsers()
  return {posts, users}
}

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
