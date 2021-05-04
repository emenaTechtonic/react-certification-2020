import React from 'react'
import renderer from 'react-test-renderer'
import Videodetailes from '../Viewdetailes'
import { Context } from '../../../providers/Context/context'
import { AuthContext } from '../../../providers/Auth/auth'

const state = {
  target: 'Wizeline',
  theme: false,
  menu: false,
  view: 'home',
}
const login = null
const logout = null
const authenticated = false

describe('Testing Videodetailes component', () => {
  test('Renders Videodetailes without crashing', async () => {
    const rendered = renderer.create(
      <AuthContext.Provider value={{ authenticated, login, logout }}>
        <Context.Provider
          value={{
            state,
          }}
        >
          <Videodetailes />
        </Context.Provider>
      </AuthContext.Provider>
    )
    expect(rendered).toMatchSnapshot()
  })
})
