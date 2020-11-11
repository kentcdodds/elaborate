import type {DataLoader} from '@remix-run/core'
import type * as Types from 'types'
import {getPosts} from '../../../utils'

const loader: DataLoader = async ({
  context,
}: {
  context: Types.Context
}): Promise<Types.Post[]> => {
  return getPosts(context.firestore)
}

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
