import type {DataLoader} from '@remix-run/core'
import {redirect} from '@remix-run/loader'
import {getPosts} from '../../../utils'

const loader: DataLoader = async () => {
  const posts = await getPosts()
  const randomPost = posts[Math.floor(Math.random() * posts.length)]
  return redirect(`/posts/${randomPost.slug}`)
}

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
