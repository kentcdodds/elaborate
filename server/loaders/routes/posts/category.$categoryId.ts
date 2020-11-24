import type {DataLoader} from '@remix-run/core'
import {json} from '@remix-run/loader'
import {getPosts, getUsers} from '../../../utils'

const loader: DataLoader = async ({
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

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
