const express = require('express')
const admin = require('firebase-admin')
const {createRequestHandler} = require('@remix-run/express')
const posts = require('./data/posts')

const app = express()

app.use(express.static('public'))

app.get('/posts/random', (req, res) => {
  const randomPost = posts[Math.floor(Math.random() * posts.length)]
  res.redirect(`/posts/${randomPost.id}`)
})

let googleAppCreds
try {
  googleAppCreds = require('./other/google-app-creds.json')
} catch {
  googleAppCreds = JSON.parse(process.env.ELABORATE_GOOGLE_APP_CREDS)
}

admin.initializeApp({
  credential: admin.credential.cert(googleAppCreds),
})

const firestore = admin.firestore()

app.get(
  '*',
  createRequestHandler({
    getLoadContext() {
      return {firestore}
    },
  }),
)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Express server started on http://localhost:${port}`)
})
