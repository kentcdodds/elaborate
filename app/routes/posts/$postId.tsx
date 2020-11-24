import * as React from 'react'
import {useRouteData} from '@remix-run/react'
import * as Types from 'types'
import {Post} from '../../components'

export function headers({loaderHeaders}: {loaderHeaders: Headers}) {
  return loaderHeaders
}

export function meta({
  data: {users, post},
}: {
  data: {users: Types.User[]; post: Types.Post | null}
  params: Record<string, string>
}) {
  const author = users.find(({id}) => id === post?.authorId)
  return {
    title: `${post?.title ?? 'Unknown post'} | Elaborate`,
    description: `Post about ${post?.category ?? 'Unknown'} by ${
      author?.name ?? 'Uknown'
    } on Elaborate`,
  }
}

function PostScreen() {
  const {post} = useRouteData<{post: Types.Post | null}>()
  if (!post) {
    return (
      <main className="grid max-w-lg gap-12 pt-12 m-auto">
        Oh no... No post found. Super sad.
      </main>
    )
  }
  return (
    <main className="grid max-w-lg gap-12 pt-12 m-auto">
      <Post post={post} />
    </main>
  )
}

export default PostScreen
