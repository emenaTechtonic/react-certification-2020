import React from 'react'
import { render } from '@testing-library/react'
import Videogrid from '../Videogrid'
import Card from '../../Card/Card'
import { Context } from '../../../providers/Context/context'

const props2 = {
  id: 'selected_Card2',
  detailed: 'false',
  title: 'title of the Card2',
  description: 'Description for the Card2',
}
const props1 = {
  id: 'selected_Card1',
  detailed: 'true',
  title: 'title of the Card1',
  description: 'Description for the Card1',
}
const props3 = {
  id: 'selected_Card3',
  detailed: 'false',
  title: 'title of the Card3',
  description: 'Description for the Card3',
}

const state = {
  target: 'Wizeline',
  theme: false,
  menu: false,
  view: 'home',
}
describe('Testing Videogrid component', () => {
  test('Renders the all cards except selected one', async () => {
    const { queryByText } = render(
      <Context.Provider
        value={{
          state,
        }}
      >
        <Videogrid id="selected_Card3">
          <Card {...props1} />
          <Card {...props2} />
          <Card {...props3} />
        </Videogrid>
      </Context.Provider>
    )
    const result = queryByText('Description for the Card3')
    expect(result).not.toBeInTheDocument()
  })
})
