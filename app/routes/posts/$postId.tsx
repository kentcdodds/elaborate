import * as React from 'react'
import {useRouteData} from '@remix-run/react'
import * as Types from 'types'
import {Post} from '../../components'

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
