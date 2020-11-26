import type {Loader} from '@remix-run/data'

export const loader: Loader = () => {
  return {
    date: new Date(),
  }
}
