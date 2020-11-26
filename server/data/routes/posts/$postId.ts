import {json, Loader} from '@remix-run/data'
import {getPosts, getUsers} from '../../../utils'

export const loader: Loader = async ({
  params,
}: {
  params: Record<string, string>
}) => {
  // our URLs have the post ID + title as a slug for SEO purposes
  // but we only need the ID, so let's grab that
  const postId = params.postId.split('-')[0]
  const post = (await getPosts()).find(({id}) => id === postId) ?? null
  const users = await getUsers()
  return json(
    {users, post},
    {
      headers: {
        'cache-control': 'public, max-age=120',
      },
    },
  )
}
