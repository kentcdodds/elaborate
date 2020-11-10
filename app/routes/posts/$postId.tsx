import * as React from 'react'
import {useRouteData} from '@remix-run/react'
import * as Types from 'types'
import {Article} from '../../components'

function PostScreen() {
  const article = useRouteData<Types.Article | null>()
  if (!article) {
    return (
      <main className="grid max-w-lg gap-12 pt-12 m-auto">
        Oh no... No article found. Super sad.
      </main>
    )
  }
  return (
    <main className="grid max-w-lg gap-12 pt-12 m-auto">
      <Article article={article} />
    </main>
  )
}

export default PostScreen
