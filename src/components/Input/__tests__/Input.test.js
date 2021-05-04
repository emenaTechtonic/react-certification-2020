import React from 'react'
import { render } from '@testing-library/react'
import { fireEvent, screen } from '@testing-library/dom'
import StyledInput from '../Input.styled'
import { Context } from '../../../providers/Context/context'

const state = {
  target: 'Wizeline',
  theme: false,
  menu: false,
  view: 'home',
}

describe('Testing Input component', () => {
  test('handle Enter event correctly ', async () => {
    const handler = jest.fn()
    render(
      <Context.Provider value={{ state }}>
        <StyledInput onKeyDown={handler} />
      </Context.Provider>
    )
    const input = screen.getByRole('input')
    input.focus()
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    expect(handler).toHaveBeenCalled()
  })
})
