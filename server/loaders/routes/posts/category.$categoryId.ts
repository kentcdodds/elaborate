import type {DataLoader} from '@remix-run/core'
import * as Types from 'types'
import {json, Response} from '@remix-run/loader'
import fakePosts from '../../../../data/posts'

const loader: DataLoader = ({params}): Promise<Types.Article[]> | Response => {
  const posts = fakePosts.filter(({category}) => category === params.categoryId)
  if (!posts.length) {
    return json(null, {
      headers: {
        'content-type': 'application/json',
      },
    })
  }
  return Promise.resolve(posts)
}

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
