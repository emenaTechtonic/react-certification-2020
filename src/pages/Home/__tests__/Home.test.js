import React from 'react'
import { render } from '@testing-library/react'
import { Context } from '../../../providers/Context/context'
import Home from '../Home.page'

const jsonFile = require('../../../utils/assets/youtube-videos-mock.json')

const state = {
  target: 'Wizeline',
  theme: false,
  menu: false,
  view: 'home',
  data: jsonFile,
}

describe('Testing Home page', () => {
  test('display Home', async () => {
    const { getByRole } = render(
      <Context.Provider
        value={{
          state,
        }}
      >
        <Home />
      </Context.Provider>
    )
    const result = await getByRole('home')
    expect(result).toBeInTheDocument()
  })
})
