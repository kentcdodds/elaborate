import * as React from 'react'
import {Link} from 'react-router-dom'
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

function Article({article}: {article: Types.Article}) {
  return (
    <article className="p-4 transition duration-200 ease-in-out transform bg-gray-200 shadow-md dark:shadow-lg dark:bg-gray-700 hover:scale-105">
      <section>
        <h1 className="pt-2 pb-6 text-3xl font-bold underline">
          {article.title}
        </h1>
        <div className="" dangerouslySetInnerHTML={{__html: article.content}} />
        <footer className="pt-3 text-right">
          <div>{article.author}</div>
          <time>{formatDate(new Date(article.createdDate))}</time>
        </footer>
      </section>
      <aside>
        <ul className="flex justify-between pt-3">
          <li>
            <Link
              to={`/posts/category/${article.category}`}
              className="underline"
            >
              {article.category}
            </Link>
          </li>
          <li>
            <Link to={`/posts/${article.id}`} className="underline">
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

export {Header, Article}
