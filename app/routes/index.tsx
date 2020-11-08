import * as React from 'react'
import {useRouteData} from '@remix-run/react'

export function meta() {
  return {
    title: 'Elaborate',
    description: 'Alright stop. Elaborate and listen...',
  }
}

type ArticleType = {
  id: string
  title: string
  content: string
  author: string
  createdDate: number
  category: string
}

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)

function Article({article}: {article: ArticleType}) {
  return (
    <article className="p-2 transition duration-200 ease-in-out transform bg-gray-200 shadow-md dark:shadow-lg dark:bg-gray-700 hover:scale-105">
      <section>
        <h1 className="text-3xl font-bold underline">{article.title}</h1>
        <div dangerouslySetInnerHTML={{__html: article.content}} />
        <footer>
          <div>{article.author}</div>
          <time>{formatDate(new Date(article.createdDate))}</time>
        </footer>
      </section>
      <aside>
        <ul>
          <li>{article.category}</li>
          <li>Permalink</li>
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

function Index() {
  const articles: Array<ArticleType> = useRouteData()
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
      <main className="grid max-w-lg gap-12 pt-12 m-auto">
        {articles.map(a => (
          <Article key={a.id} article={a} />
        ))}
      </main>
    </div>
  )
}

export default Index
