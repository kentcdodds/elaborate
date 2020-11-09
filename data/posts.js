const unified = require('unified')
const markdown = require('remark-parse')
const remark2rehype = require('remark-rehype')
const html = require('rehype-stringify')

module.exports = [
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
].map(({content, ...article}) => {
  return {
    ...article,
    content: unified()
      .use(markdown)
      .use(remark2rehype)
      .use(html)
      .processSync(content)
      .contents.toString(),
  }
})
