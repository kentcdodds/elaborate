import type {DataLoader} from '@remix-run/core'

const loader: DataLoader = () => {
  return {
    message: 'this is awesome 😎',
  }
}

// https://github.com/remix-run/discuss/issues/14
module.exports = loader
