import React from 'react'
import renderer from 'react-test-renderer'
import { Context } from '../../../providers/Context/context'
import { AuthProvider } from '../../../providers/Auth/auth'
import Header from '../Header'

const state = {
  target: 'Wizeline',
  theme: false,
  data: [],
  user: { id: 0, name: '', avatarUrl: '' },
  favorites: [],
}
const login = null
const logout = null

describe('Testing Header component', () => {
  test('renders Header without crashing', async () => {
    const rendered = renderer.create(
      <AuthProvider authenticated={false} login={login} logout={logout}>
        <Context.Provider value={{ state }}>
          <Header />
        </Context.Provider>
      </AuthProvider>
    )
    expect(rendered).toMatchSnapshot()
  })
})
