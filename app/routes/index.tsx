import * as React from 'react'
import {useRouteData} from '@remix-run/react'

export function meta() {
  return {
    title: 'Elaborate',
    description: 'Alright stop. Elaborate and listen...',
  }
}

export default function Index() {
  const data = useRouteData()

  return (
    <div>
      <div className="max-w-md m-auto text-center">
        <h1 className="text-6xl">Elaborate</h1>
        <div>
          <blockquote>
            {`If you don't want to forget what you learned, write it down.`}
          </blockquote>
          <div className="text-right">- Kent</div>
        </div>
      </div>
      <p>Message from the loader: {data.message}</p>
    </div>
  )
}
