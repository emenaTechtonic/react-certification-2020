import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Context } from '../../../providers/Context/context'
import { AuthContext } from '../../../providers/Auth/auth'
import Menu from '../Menu'

const jsonFile = require('../../../utils/assets/youtube-videos-mock.json')

const login = null
const logout = null

let state = {
  target: 'Wizeline',
  theme: false,
  data: jsonFile,
  user: { id: 0, name: '', avatarUrl: '' },
  favorites: [],
}

let authenticated = false

describe('Testing Menu component', () => {
  test('Renders Menu without crashing', async () => {
    const rendered = renderer.create(
      <AuthContext.Provider value={{ authenticated, login, logout }}>
        <Context.Provider value={{ state }}>
          <MemoryRouter>
            <Menu />
          </MemoryRouter>
        </Context.Provider>
      </AuthContext.Provider>
    )
    expect(rendered).toMatchSnapshot()
  })

  test('Favorites view changed when button menu clicked', async () => {
    const e = { target: { innerText: 'Favorites' } }
    authenticated = true
    state = {
      view: 'home',
    }

    const payload = { payload: 'favorites', type: 'SET_VIEW' }

    const handleChange = jest.fn()
    const dispatch = jest.fn()

    const { getByText } = render(
      <Context.Provider value={{ state, dispatch }}>
        <MemoryRouter>
          <AuthContext.Provider value={{ authenticated, login, logout }}>
            <Menu handleChange={handleChange} />
          </AuthContext.Provider>
        </MemoryRouter>
      </Context.Provider>
    )

    const container = await waitFor(() => getByText('Favorites'))
    fireEvent.click(container, e)

    expect(dispatch).toHaveBeenCalledTimes(3)
    expect(dispatch).toHaveBeenCalledWith(payload)
  })

  test('Home view changed when button menu clicked', async () => {
    const e = { target: { innerText: 'Home' } }

    const payload = { payload: 'home', type: 'SET_VIEW' }

    const handleChange = jest.fn()
    const dispatch = jest.fn()

    const { getByText } = render(
      <AuthContext.Provider value={{ authenticated, login, logout }}>
        <Context.Provider value={{ state, dispatch }}>
          <MemoryRouter>
            <Menu handleChange={handleChange} />
          </MemoryRouter>
        </Context.Provider>
      </AuthContext.Provider>
    )

    const container = await waitFor(() => getByText('Home'))
    fireEvent.click(container, e)

    expect(dispatch).toHaveBeenCalledTimes(3)
    expect(dispatch).toHaveBeenCalledWith(payload)
  })
})
