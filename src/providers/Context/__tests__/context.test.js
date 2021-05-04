import { act, renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../../../utils/hooks/useFetch'

const REACT_APP_API_URL =
  'https://www.googleapis.com/youtube/v3/search?key=AIzaSyADs3mjNx1AMBHhmVTHr30XvnG-iZ-cNF4&type=video&part=snippet&maxResults=10&q='

const query = 'Wizeline'

const getControlledPromise = () => {
  let deferred
  const promise = new Promise((resolve, reject) => {
    deferred = { resolve, reject }
  })
  return { deferred, promise }
}

describe('Testing Context', () => {
  beforeEach(() => {
    process.env = Object.assign(process.env, {
      REACT_APP_API_URL,
    })
  })

  test('fetches data with environmental variable and right link', async () => {
    global.fetch = jest.fn()
    await act(async () => renderHook(() => useFetch(query)))
    expect(global.fetch).toBeCalledWith(REACT_APP_API_URL + query)
  })

  test('got data successfully', async () => {
    const { deferred, promise } = getControlledPromise()
    global.fetch = jest.fn(() => promise)
    const { result, waitForNextUpdate } = renderHook(useFetch)
    deferred.resolve({
      json: () => ({
        items: 'Wizeline',
      }),
    })
    await waitForNextUpdate()
    expect(result.current.data).toStrictEqual('Wizeline')
  })
})
