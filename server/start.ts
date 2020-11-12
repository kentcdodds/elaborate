import admin from 'firebase-admin'
import type {RequestHandler} from 'express'
import {createRequestHandler} from '@remix-run/express'
import {getPosts} from './utils'

// express uses module.exports = () => {}
// and this makes TypeScript sad...
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express')

const app = express()

app.use(express.static('public'))

let googleAppCreds
try {
  googleAppCreds = require('../other/google-app-creds.json')
} catch {
  const {ELABORATE_GOOGLE_APP_CREDS} = process.env
  if (!ELABORATE_GOOGLE_APP_CREDS) {
    throw new Error('ELABORATE_GOOGLE_APP_CREDS env variable is required')
  }
  googleAppCreds = JSON.parse(ELABORATE_GOOGLE_APP_CREDS)
}

admin.initializeApp({
  credential: admin.credential.cert(googleAppCreds),
})

const firestore = admin.firestore()

const handleGetRandom: RequestHandler = async (req, res) => {
  const posts = await getPosts(firestore)
  const randomPost = posts[Math.floor(Math.random() * posts.length)]
  res.redirect(`/posts/${randomPost.slug}`)
}
app.get('/posts/random', handleGetRandom)

app.get(
  '*',
  createRequestHandler({
    getLoadContext() {
      return {firestore}
    },
  }),
)

const port = process.env.PORT ?? 3000

app.listen(port, () => {
  console.log(`Express server started on http://localhost:${port}`)
})
