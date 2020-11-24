import type {DataLoader} from '@remix-run/core'
import {json} from '@remix-run/loader'
import {getPosts, getUsers} from '../../../utils'

const loader: DataLoader = async () => {
  const posts = await getPosts()
  const users = await getUsers()
  return json(
    {posts, users},
    {
      headers: {
        'cache-control': 'public, max-age=10',
      },
    },
  )
}

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
