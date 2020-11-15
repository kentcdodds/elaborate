import {useRouteData} from '@remix-run/react'

function Random() {
  useRouteData()
  // this should never get rendered
  return null
}

export default Random
