import { combineReducers } from "redux"
import { RESET_STORE_SIGN_OUT_REDUX } from "../ActionTypes"
import app from "./App"
import user from "./User"

const appReducer = combineReducers({ app, user })

const rootReducer = (state, action) => {
  // reset store when sign out
  if (action.type === RESET_STORE_SIGN_OUT_REDUX) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default rootReducer
