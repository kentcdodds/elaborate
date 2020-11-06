const express = require('express')
const {createRequestHandler} = require('@remix-run/express')

const app = express()

app.use(express.static('public'))

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
