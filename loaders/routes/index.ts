import type {DataLoader} from '@remix-run/core'

const loader: DataLoader = () => {
  return {
    message: 'this is awesome 😎',
  }
}

module.exports = loader
