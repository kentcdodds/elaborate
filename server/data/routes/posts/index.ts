import {json, Loader} from '@remix-run/data'
import {getPosts, getUsers} from '../../../utils'

export const loader: Loader = async () => {
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
