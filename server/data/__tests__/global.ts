import {createSession, Request} from '@remix-run/core'
import {loader} from '../global'

test('sends back the right data', async () => {
  const request = new Request()
  const session = createSession({})
  const loaderArgs = {params: {}, context: {}, session, request}
  expect(await loader(loaderArgs)).toEqual({
    date: expect.any(Date),
  })
})
