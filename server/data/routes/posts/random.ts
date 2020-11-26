import {redirect, Loader} from '@remix-run/data'
import {getPosts} from '../../../utils'

export const loader: Loader = async () => {
  const posts = await getPosts()
  const randomPost = posts[Math.floor(Math.random() * posts.length)]
  return redirect(`/posts/${randomPost.slug}`)
}
