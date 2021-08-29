import { SET_SHOW_LOADER_REDUX, SET_SHOW_TOAST_REDUX } from "../ActionTypes"

const initState = {
  showToastRedux: false,
  toastPropsRedux: null,
  showLoaderRedux: false
}

const appConfigReducer = (state = initState, action) => {
  const { payload, type } = action
  switch (type) {
    case SET_SHOW_TOAST_REDUX: {
      return {
        ...state,
        showToastRedux: payload.showToastRedux,
        toastPropsRedux: payload.toastPropsRedux
      }
    }
    case SET_SHOW_LOADER_REDUX: {
      return {
        ...state,
        showLoaderRedux: payload.showLoaderRedux
      }
    }
    default: {
      return state
    }
  }
}

export default appConfigReducer
