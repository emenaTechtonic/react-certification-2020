import React, { useState, useEffect, createContext, useCallback } from 'react'
import { AUTH_STORAGE_KEY, AUTH_STORAGE_USER } from '../../utils/constants'
import { storage } from '../../utils/storage'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY)
    const isAuthenticated = Boolean(lastAuthState)

    setAuthenticated(isAuthenticated)
  }, [])

  const login = useCallback((user) => {
    setAuthenticated(true)
    storage.set(AUTH_STORAGE_KEY, true)
    storage.set(AUTH_STORAGE_USER, user)
  }, [])

  const logout = useCallback((user) => {
    setAuthenticated(false)
    storage.set(AUTH_STORAGE_KEY, false)
    storage.set(AUTH_STORAGE_USER, user)
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

// export { useAuth }
export default AuthProvider
