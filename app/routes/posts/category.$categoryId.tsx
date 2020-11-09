import * as React from 'react'
import {useParams} from 'react-router-dom'
import {useRouteData} from '@remix-run/react'
import * as Types from 'types'
import {Article} from '../../components'

function Category() {
  const {categoryId} = useParams()
  const articles = useRouteData<Types.Article[] | null>()
  return (
    <div>
      <strong>{categoryId} posts</strong>
      <main className="grid max-w-lg gap-12 pt-12 m-auto">
        {articles?.map(a => <Article key={a.id} article={a} />) ??
          'Oh no... there are no matching articles'}
      </main>
    </div>
  )
}

export default Category
