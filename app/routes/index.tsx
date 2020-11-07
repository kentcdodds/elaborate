import * as React from 'react'

export function meta() {
  return {
    title: 'Elaborate',
    description: 'Alright stop. Elaborate and listen...',
  }
}

function Article() {
  return (
    <article className="p-2 transition duration-200 ease-in-out transform bg-gray-200 shadow-md dark:shadow-lg dark:bg-gray-700 hover:scale-105">
      <section>
        <h1 className="text-3xl font-bold underline">Build CSS before Remix</h1>
        <p>
          When you have some custom CSS you are building, make sure to build it{' '}
          <em>before</em> you build remix. Otherwise, it may not be in place in
          time for remix to grab it.
        </p>
        <footer>
          <div>Kent C. Dodds</div>
          <time>November 6th, 2020</time>
        </footer>
      </section>
      <aside>
        <ul>
          <li>Remix</li>
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
        <Article />
        <Article />
        <Article />
        <Article />
      </main>
    </div>
  )
}

export default Index
