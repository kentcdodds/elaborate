import * as React from 'react'
import {useRouteData} from '@remix-run/react'
import * as Types from 'types'
import {Article} from '../../components'

export function meta() {
  return {
    title: 'Elaborate',
    description: 'Alright stop. Elaborate and listen...',
  }
}

function Posts() {
  const articles = useRouteData<Types.Article[]>()
  return (
    <main className="grid max-w-lg gap-12 pt-12 m-auto">
      {articles.map(a => (
        <Article key={a.id} article={a} />
      ))}
    </main>
  )
}

export default Posts
