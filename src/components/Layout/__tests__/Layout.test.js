import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { Context } from '../../../providers/Context/context'
import { AuthProvider } from '../../../providers/Auth/auth'
import Layout from '../Layout'

const state = {
  target: 'Wizeline',
  theme: false,
  data: [],
  user: { id: 0, name: '', avatarUrl: '' },
  favorites: [],
}
const login = null
const logout = null

describe('Testing Layout component', () => {
  test('renders Layout without crashing', async () => {
    const rendered = renderer.create(
      <AuthProvider authenticated={false} login={login} logout={logout}>
        <Context.Provider value={{ state }}>
          <MemoryRouter>
            <Layout />
          </MemoryRouter>
        </Context.Provider>
      </AuthProvider>
    )
    expect(rendered).toMatchSnapshot()
  })
})
