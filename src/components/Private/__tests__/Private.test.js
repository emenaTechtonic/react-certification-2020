import React from 'react'
import renderer from 'react-test-renderer'
import { Context } from '../../../providers/Context/context'
import { AuthContext } from '../../../providers/Auth/auth'
import Private from '../Private'

const state = {
  target: 'Wizeline',
  theme: false,
  menu: false,
  view: 'favorites',
}
const login = null
const logout = null
const authenticated = false

describe('Testing Private component', () => {
  test('Renders Private without crashing', async () => {
    const rendered = renderer.create(
      <AuthContext.Provider value={{ authenticated, login, logout }}>
        <Context.Provider value={{ state }}>
          <Private />
        </Context.Provider>
      </AuthContext.Provider>
    )
    expect(rendered).toMatchSnapshot()
  })
})
