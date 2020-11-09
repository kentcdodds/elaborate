const express = require('express')
const {createRequestHandler} = require('@remix-run/express')
const posts = require('./data/posts')

const app = express()

app.use(express.static('public'))

app.get('/posts/random', (req, res) => {
  const randomPost = posts[Math.floor(Math.random() * posts.length)]
  res.redirect(`/posts/${randomPost.id}`)
})

app.get(
  '*',
  createRequestHandler({
    getLoadContext() {
      // Whatever you return here will be passed as `context` to your loaders.
    },
  }),
)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Express server started on http://localhost:${port}`)
})
