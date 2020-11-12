import * as React from 'react'
import {useParams} from 'react-router-dom'
import {useRouteData} from '@remix-run/react'
import * as Types from 'types'
import {Post} from '../../components'

function Category() {
  const {categoryId} = useParams()
  const {posts} = useRouteData<{posts: Types.Post[]}>()
  return (
    <div>
      <div className="text-2xl text-center">
        <strong>{categoryId} posts</strong>
      </div>
      <main className="grid max-w-lg gap-12 pt-12 m-auto">
        {posts.length
          ? posts.map(a => <Post key={a.id} post={a} />)
          : 'Oh no... there are no matching posts'}
      </main>
    </div>
  )
}

export default Category
