const express = require('express')
const admin = require('firebase-admin')
const {createRequestHandler} = require('@remix-run/express')

const app = express()

app.use(express.static('public'))

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

app.get('/posts/random', async (req, res) => {
  const snapshot = await firestore.collection('posts').get()
  const posts = await Promise.all(snapshot.docs.map(toArticle))

  async function toArticle(doc) {
    const data = doc.data()
    const author = (await data.author.get()).data()?.name ?? 'Unknown'
    const createdDate = data.createdDate.toDate().getTime()
    const {title, content, category} = data
    return {id: doc.id, createdDate, author, title, content, category}
  }

  const randomPost = posts[Math.floor(Math.random() * posts.length)]
  res.redirect(`/posts/${randomPost.id}`)
})

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
