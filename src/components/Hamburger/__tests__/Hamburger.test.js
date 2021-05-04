import React from 'react'
import renderer from 'react-test-renderer'
import { Context } from '../../../providers/Context/context'
import Hamburger from '../Hamburger'

const state = {
  theme: false,
}

describe('Testing Hamburger component', () => {
  test('renders Hamburger without crashing', async () => {
    const rendered = renderer.create(
      <Context.Provider value={{ state }}>
        <Hamburger />
      </Context.Provider>
    )
    expect(rendered).toMatchSnapshot()
  })
})
