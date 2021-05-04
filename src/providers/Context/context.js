import React, { useEffect, createContext, useCallback, useReducer, memo } from 'react'
import { useFetch } from '../../utils/hooks/useFetch'
import { storage } from '../../utils/storage'
import { isElementIn, removeElement } from '../../utils/fns'
import {
  AUTH_STORAGE_USER,
  AUTH_STORAGE_KEY,
  AUTH_STORAGE_FAVORITES,
} from '../../utils/constants'
import { ContextReducer } from './reducer'

export const Context = createContext(null)

export const initialState = {
  target: 'Wizeline',
  theme: false,
  menu: false,
  view: 'home',
  data: [],
  user: { id: 0, name: '', avatarUrl: '' },
  favorites: [],
}
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContextReducer, initialState)
  const { data } = useFetch(state.target)

  useEffect(() => {
    if (data) dispatch({ type: 'GET_DATA', payload: data })
  }, [data])
  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY)
    const isAuthenticated = Boolean(lastAuthState)

    if (isAuthenticated) {
      const lastUser = storage.get(AUTH_STORAGE_USER)
      const userAuthenticated = Object(lastUser)

      dispatch({ type: 'SET_USER', payload: userAuthenticated })

      const lastFavorites = storage.get(AUTH_STORAGE_FAVORITES)
      if (lastFavorites) {
        const favorites = lastFavorites
        dispatch({ type: 'SET_FAVORITES', payload: favorites })
      }
    }
  }, [])

  const saveFavoriteCard = useCallback((card) => {
    let favorites = []
    const lastFavorites = storage.get(AUTH_STORAGE_FAVORITES)
    if (lastFavorites) {
      favorites = lastFavorites
    }
    if (card) {
      const res = isElementIn(card.id, favorites)
      if (!res) {
        favorites.push(card)
        dispatch({ type: 'SET_FAVORITES', payload: favorites })
        storage.set(AUTH_STORAGE_FAVORITES, favorites)
      }
    }
  }, [])
  const removeFavoriteCard = useCallback((card) => {
    let favorites = []
    const lastFavorites = storage.get(AUTH_STORAGE_FAVORITES)
    if (lastFavorites) {
      favorites = lastFavorites
    }
    if (card) {
      const newFavorites = removeElement(card.id, favorites)
      dispatch({ type: 'SET_FAVORITES', payload: newFavorites })
      storage.set(AUTH_STORAGE_FAVORITES, newFavorites)
    }
  }, [])

  // return isLoading ? (
  //   <div> Loading...</div>
  // ) : (
  return (
    <Context.Provider value={{ state, dispatch, saveFavoriteCard, removeFavoriteCard }}>
      {children}
    </Context.Provider>
  )
}
export default memo(ContextProvider)
