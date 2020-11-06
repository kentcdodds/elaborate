import * as React from 'react'
import {Meta, Scripts, Styles, Routes} from '@remix-run/react'

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body>
        <Routes />
        <Scripts />
        <footer>
          <p>This is a fun little remix project by Kent</p>
        </footer>
      </body>
    </html>
  )
}
