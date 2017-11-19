const initialState = {}

export default function peopleReducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_MESSAGE':
      return {
        message: action.payload 
      }

    default:
      return state
  }
}