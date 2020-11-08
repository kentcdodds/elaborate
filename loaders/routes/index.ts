import type {DataLoader} from '@remix-run/core'
import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'

const loader: DataLoader = () => {
  return Promise.all(
    [
      {
        id: '12321209',
        title: 'Build CSS before Remix',
        content: `
When you have some custom CSS you are building, make sure to build it _before_
you build remix. Otherwise, it may not be in place in time for remix to grab it.
        `.trim(),
        author: 'Kent C. Dodds',
        createdDate: 1604702700000,
        category: 'remix',
      },
      {
        id: '123212093432',
        title: 'DateTimeFormat options',
        content: `
To format these elaborations, I used the following code:

\`\`\`javascript
const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
\`\`\`
        `.trim(),
        author: 'Kent C. Dodds',
        createdDate: 1604809560963,
        category: 'dates',
      },
      {
        id: '1232120342349',
        title: 'Mock modules with Storybook',
        content: `
You customize the webpack config with the
\`webpack.NormalModuleReplacementPlugin\`. It works surprisingly well. The
biggest trick is figuring out which story is being referenced which you can
sortof parse from the URL query params.
        `.trim(),
        author: 'Kent C. Dodds',
        createdDate: 1604702700000,
        category: 'remix',
      },
    ].map(async ({content, ...article}) => {
      return {
        ...article,
        content: (
          await unified()
            .use(markdown)
            .use(remark2rehype)
            .use(html)
            .process(content)
        ).contents,
      }
    }),
  )
}

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
