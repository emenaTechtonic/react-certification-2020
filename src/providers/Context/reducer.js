export const ContextReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: !state.theme,
      }
    case 'OPEN_MENU':
      return {
        ...state,
        menu: action.payload,
      }
    case 'GET_DATA':
      return {
        ...state,
        data: action.payload,
      }
    case 'SET_VIEW':
      return {
        ...state,
        view: action.payload,
      }
    case 'SET_TARGET':
      return {
        ...state,
        target: action.payload,
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
      }

    default:
      return state
  }
}
