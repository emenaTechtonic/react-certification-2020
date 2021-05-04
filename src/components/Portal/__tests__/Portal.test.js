import React from 'react'
import renderer from 'react-test-renderer'
import { Context } from '../../../providers/Context/context'
import Portal from '../Portal'

const state = {
  target: 'Wizeline',
  theme: false,
  menu: false,
  view: 'home',
}
describe('Testing Portal component', () => {
  test('Renders Portal without crashing', async () => {
    const rendered = renderer.create(
      <Context.Provider value={{ state }}>
        <Portal />
      </Context.Provider>
    )
    expect(rendered).toMatchSnapshot()
  })
})
