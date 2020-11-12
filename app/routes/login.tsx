import * as React from 'react'
import {Header} from '../components'

export function meta() {
  return {
    title: 'Elaborate Login',
    description: 'Come on in here yo!',
  }
}

function Index() {
  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const {
      elements: {
        email: {value: email},
        password: {value: password},
      },
    } = event.target as typeof event.target & {
      elements: {
        email: {value: string}
        password: {value: string}
      }
    }
    console.log({email, password})
  }
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Index
