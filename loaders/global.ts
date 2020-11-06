import type {DataLoader} from '@remix-run/core'

const loader: DataLoader = () => {
  return {
    date: new Date(),
  }
}

module.exports = loader
