import React from 'react'
import renderer from 'react-test-renderer'
import { Context } from '../../../providers/Context/context'
import { AuthContext } from '../../../providers/Auth/auth'
import Icon from '../Icon'

const state = {
  target: 'Wizeline',
  theme: false,
  menu: false,
  view: 'home',
  user: { id: 0, name: '', avatarUrl: '' },
}
const login = null
const logout = null
const authenticated = false
describe('Testing Icon component', () => {
  test('Renders Icon without crashing', async () => {
    const rendered = renderer.create(
      <AuthContext.Provider value={{ authenticated, login, logout }}>
        <Context.Provider value={{ state }}>
          <Icon />
        </Context.Provider>
      </AuthContext.Provider>
    )
    expect(rendered).toMatchSnapshot()
  })
})
