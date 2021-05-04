import React from 'react'
import renderer from 'react-test-renderer'
import { Context } from '../../../providers/Context/context'
import { AuthProvider } from '../../../providers/Auth/auth'
import Login from '../Login.page'

const _ = require('lodash')

const state = {
  target: 'Wizeline',
  theme: false,
  data: [],
  user: { id: 0, name: '', avatarUrl: '' },
  favorites: [],
}
const login = null
const logout = null

describe('Testing Login component', () => {
  test('renders Login without crashing', async () => {
    const func = jest.fn()
    const debouncedFunc = _.debounce(func, 1000)
    const rendered = renderer.create(
      <AuthProvider authenticated={false} login={login} logout={logout}>
        <Context.Provider value={{ state }}>
          <Login closeForm={debouncedFunc} />
        </Context.Provider>
      </AuthProvider>
    )

    expect(rendered).toMatchSnapshot()
  })
})
