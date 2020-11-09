import type {DataLoader} from '@remix-run/core'
import * as Types from 'types'
import fakePosts from '../../../../data/posts'

const loader: DataLoader = (): Promise<Types.Article[]> => {
  return Promise.all(fakePosts)
}

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
