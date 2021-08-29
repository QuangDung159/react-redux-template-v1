import {
  RESET_STORE_SIGN_OUT_REDUX,
  SET_CURRENT_USER_REDUX,
  SET_SHOW_LOADER_REDUX,
  SET_SHOW_TOAST_REDUX
} from "./ActionTypes"

export const setCurrentUserRedux = currentUserRedux => ({
  type: SET_CURRENT_USER_REDUX,
  payload: {
    currentUserRedux
  }
})

export const resetStoreSignOutRedux = () => ({
  type: RESET_STORE_SIGN_OUT_REDUX
})

export const setShowToastRedux = (showToastRedux, content, type = "error") => ({
  type: SET_SHOW_TOAST_REDUX,
  payload: {
    showToastRedux,
    toastPropsRedux: { type, content }
  }
})

export const setShowLoaderRedux = showLoaderRedux => ({
  type: SET_SHOW_LOADER_REDUX,
  payload: {
    showLoaderRedux
  }
})
