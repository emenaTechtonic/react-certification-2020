import React, { useContext } from 'react'
import TestRenderer from 'react-test-renderer'
import { createMemoryHistory } from 'history'
import { MemoryRouter } from 'react-router-dom'
import { Context } from '../../../providers/Context/context'
import { AuthProvider, AuthContext } from '../../../providers/Auth/auth'
import App from '../App'

const { act } = TestRenderer
const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

const state = {
  target: 'Wizeline',
  theme: false,
  data: [],
  user: { id: 0, name: '', avatarUrl: '' },
  favorites: [],
}

const history = createMemoryHistory()

history.push = jest.fn()

let login = null
let logout = null
let renderer = null
let providerContext = null
let mount = null

beforeEach(() => {
  const authenticated = true
  logout = jest.fn()
  login = jest.fn()

  const ProviderChild = () => {
    providerContext = useContext(AuthContext)
    const dispatch = jest.fn()

    return (
      <Context.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Context.Provider>
    )
  }
  mount = () => {
    renderer = TestRenderer.create(
      <AuthProvider authenticated={authenticated} login={login} logout={logout}>
        <ProviderChild />
      </AuthProvider>
    )
  }
})

afterEach(() => {
  renderer.unmount()
})

describe('Testing App component', () => {
  test('User is not authorized', async () => {
    mount()
    expect(providerContext.authenticated).toBe(false)
  })
  test('Successfully authorized', async () => {
    await TestRenderer.act(async () => {
      mount()
    })
    await TestRenderer.act(async () => {
      providerContext.login()
    })
    expect(providerContext.authenticated).toBe(true)
  })

  test('Found Favorites', async () => {
    let testInstance = null
    await TestRenderer.act(async () => {
      mount()
    })
    await TestRenderer.act(async () => {
      providerContext.login()
    })

    testInstance = renderer.root
    const item = testInstance.findByProps({ className: 'favoritesLink' }).props.children
    expect(item).toEqual('Favorites')
  })

  test('Favorites landed on Private route', async () => {
    let testInstance = null
    const e = { target: { innerText: 'Favorites' }, preventDefault: () => {} }
    await TestRenderer.act(async () => {
      mount()
    })
    await TestRenderer.act(async () => {
      providerContext.login()
    })

    testInstance = renderer.root
    const item = testInstance.findByProps({ className: 'favoritesLink' })

    await act(async () => {
      item.props.onClick(e)
    })

    expect(mockHistoryPush).toHaveBeenCalledWith('/private')
  })
})
