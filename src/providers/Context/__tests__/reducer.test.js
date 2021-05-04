import { ContextReducer } from '../reducer'
import { initialState } from '../context'

describe('context|reducer', () => {
  it('returns new state for "OPEN_MENU" action type', () => {
    const updatedState = ContextReducer(initialState, {
      type: 'OPEN_MENU',
      payload: true,
    })
    expect(updatedState.menu).toEqual(true)
  })
  it('returns new state for "SET_VIEW" action type', () => {
    const updatedState = ContextReducer(initialState, {
      type: 'SET_VIEW',
      payload: 'new',
    })
    expect(updatedState.view).toEqual('new')
  })
  it('returns new state for "SET_TARGET" action type', () => {
    const updatedState = ContextReducer(initialState, {
      type: 'SET_TARGET',
      payload: 'Google',
    })
    expect(updatedState.target).toEqual('Google')
  })
  it('returns new state for "TOGGLE_THEME" action type', () => {
    const oldTheme = initialState.theme
    const updatedState = ContextReducer(initialState, {
      type: 'TOGGLE_THEME',
    })
    expect(updatedState.theme).not.toEqual(oldTheme)
  })
})
