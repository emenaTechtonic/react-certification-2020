import React from 'react'
import renderer from 'react-test-renderer'
import { Context } from '../../../providers/Context/context'
import Search from '../Search'

const state = {
  target: 'Wizeline',
  theme: false,
  menu: false,
  view: 'home',
}
describe('Testing Search component', () => {
  test('Renders Search without crashing', async () => {
    const rendered = renderer.create(
      <Context.Provider value={{ state }}>
        <Search />
      </Context.Provider>
    )
    expect(rendered).toMatchSnapshot()
  })
})
