import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import express, {RequestHandler} from 'express'
import 'express-async-errors'
import {createRequestHandler} from '@remix-run/express'
import {getPosts} from './utils'

const app = express()

app.use(express.static('public'))

firebase.initializeApp({
  apiKey: 'AIzaSyCI2PS7OUl3MCS0hhY_WZZiuGLrunIqF6c',
  authDomain: 'elaborate-56879.firebaseapp.com',
  databaseURL: 'https://elaborate-56879.firebaseio.com',
  projectId: 'elaborate-56879',
  storageBucket: 'elaborate-56879.appspot.com',
  messagingSenderId: '246852427514',
  appId: '1:246852427514:web:c31a2e1cb4abedaf12b343',
  measurementId: 'G-1L1NBKCMBQ',
})

const firestore = firebase.firestore()
const auth = firebase.auth()

const handleGetRandom: RequestHandler = async (req, res) => {
  const posts = await getPosts(firestore)
  const randomPost = posts[Math.floor(Math.random() * posts.length)]
  res.redirect(`/posts/${randomPost.slug}`)
}
app.get('/posts/random', handleGetRandom)

const handleLoginLink: RequestHandler = async (req, res) => {
  const result = await auth.signInWithEmailLink('me@kentcdodds.com', req.url)
  console.log(result)
  res.redirect('/')
}
app.get('/login-link', handleLoginLink)

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
