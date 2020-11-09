import type {DataLoader} from '@remix-run/core'
import * as Types from 'types'
import {json, Response} from '@remix-run/loader'
import fakePosts from '../../../../data/posts'

const loader: DataLoader = ({params}): Promise<Types.Article> | Response => {
  const post = fakePosts.find(({id}) => id === params.postId)
  if (!post) {
    return json(null, {
      headers: {
        'content-type': 'application/json',
      },
    })
  }
  return Promise.resolve(post)
}

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
