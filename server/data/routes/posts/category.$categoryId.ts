import {json, Loader} from '@remix-run/data'
import {getPosts, getUsers} from '../../../utils'

export const loader: Loader = async ({
  params,
}: {
  params: Record<string, string>
}) => {
  const posts = (await getPosts()).filter(
    ({category}) => category === params.categoryId,
  )
  const users = await getUsers()
  return json(
    {users, posts},
    {
      headers: {
        'cache-control': 'public, max-age=60',
      },
    },
  )
}
