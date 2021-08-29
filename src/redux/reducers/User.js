import { SET_CURRENT_USER_REDUX } from "../ActionTypes"

const initState = {
  currentUserRedux: null
}

const userReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CURRENT_USER_REDUX: {
      return { ...state, currentUserRedux: payload.currentUserRedux }
    }
    default: {
      return state
    }
  }
}

export default userReducer
