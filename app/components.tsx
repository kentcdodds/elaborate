import * as React from 'react'
import {Link} from 'react-router-dom'
import {useRouteData} from '@remix-run/react'
import * as Types from 'types'

function Header() {
  return (
    <div>
      <header className="max-w-md m-auto text-center">
        <h1 className="text-6xl">Elaborate</h1>
        <div>
          <blockquote>
            {`If you don't want to forget what you learned, write it down.`}
          </blockquote>
          <div className="text-right">- Kent</div>
        </div>
      </header>
      <nav className="p-8 text-lg">
        <ul className="flex justify-between max-w-md m-auto">
          <li>
            <Link to="/posts" className="underline">
              Posts
            </Link>
          </li>
          <li>
            <a href="/posts/random" className="underline">
              Random Post
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)

function Post({post}: {post: Types.Post}) {
  const {users} = useRouteData<{users: Types.User[]}>()
  const author = users.find(({id}) => id === post.authorId) ?? {name: 'Unknown'}
  return (
    <article
      className="p-4 transition duration-200 ease-in-out transform bg-gray-200 shadow-md dark:shadow-lg dark:bg-gray-700 hover:scale-105"
      // tailwind doesn't have this. I'm not sure why, but this was the best way
      // I could think to ensure that the post isn't wider than the parent if
      // the contents of the post are too wide
      style={{maxWidth: 'inherit'}}
    >
      <section>
        <h1 className="pt-2 pb-6 text-3xl font-bold underline">{post.title}</h1>
        <div
          className="overflow-x-scroll"
          dangerouslySetInnerHTML={{__html: post.content}}
        />
        <footer className="pt-3 text-right">
          <div>{author.name}</div>
          <time>{formatDate(new Date(post.createdDate))}</time>
        </footer>
      </section>
      <aside>
        <ul className="flex justify-between pt-3">
          <li>
            <Link to={`/posts/category/${post.category}`} className="underline">
              {post.category}
            </Link>
          </li>
          <li>
            <Link to={`/posts/${post.slug}`} className="underline">
              Permalink
            </Link>
          </li>
          <li>
            <span role="img" aria-label="favorite">
              ❤️
            </span>
          </li>
        </ul>
      </aside>
    </article>
  )
}

export {Header, Post}
