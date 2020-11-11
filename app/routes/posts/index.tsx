import * as React from 'react'
import {useRouteData} from '@remix-run/react'
import * as Types from 'types'
import {Post} from '../../components'

export function meta() {
  return {
    title: 'Elaborate',
    description: 'Alright stop. Elaborate and listen...',
  }
}

function Posts() {
  const posts = useRouteData<Types.Post[]>()
  return (
    <main className="grid max-w-lg gap-12 pt-12 m-auto">
      {posts.map(a => (
        <Post key={a.id} post={a} />
      ))}
    </main>
  )
}

export default Posts
