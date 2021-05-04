import React from 'react'
import { render } from '@testing-library/react'
import { Context } from '../../../providers/Context/context'
import Card from '../Card'

const state = {
  theme: false,
}

const props = {
  id: 'card1',
  detailed: true,
  title: 'Welcome to Wizeline Guadalajara',
  description: 'description',
  link: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
  width: 200,
  height: 90,
  alt: 'Welcome to Wizeline Guadalajara',
}

describe('Testing Card component', () => {
  test('display Title on the card', async () => {
    const { getByText } = render(
      <Context.Provider
        value={{
          state,
        }}
      >
        <Card {...props} />
      </Context.Provider>
    )
    const result = getByText('Welcome to Wizeline Guadalajara')
    expect(result).toBeInTheDocument()
  })

  test('display Description on the card', async () => {
    const { getByText } = render(
      <Context.Provider
        value={{
          state,
        }}
      >
        <Card {...props} />
      </Context.Provider>
    )
    const result = getByText('description')
    expect(result).toBeInTheDocument()
  })
  test('display Alt on the card', async () => {
    const { getByAltText } = render(
      <Context.Provider
        value={{
          state,
        }}
      >
        <Card {...props} />
      </Context.Provider>
    )
    const result = getByAltText('Welcome to Wizeline Guadalajara')
    expect(result).toBeInTheDocument()
  })

  test('display Correct link on the card', async () => {
    const { getByAltText } = render(
      <Context.Provider
        value={{
          state,
        }}
      >
        <Card {...props} />
      </Context.Provider>
    )
    const image = getByAltText('Welcome to Wizeline Guadalajara')
    expect(image.src).toContain('https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg')
  })
  test('Renders Standard type card by sending Stardard type', async () => {
    const { container } = render(
      <Context.Provider
        value={{
          state,
        }}
      >
        <Card {...props} />
      </Context.Provider>
    )
    expect(container.firstChild).toHaveClass('detailed')
  })
})
