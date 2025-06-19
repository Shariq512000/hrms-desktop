export const reducer = (state, action) => {
    switch (action.type) {
  
      case "USER_LOGIN": {
        return { ...state, isLogin: true , user: action.payload }
      }
      case "USER_LOGOUT": {
        return { ...state, isLogin: false , user: {} , token: "" } // set this to null on purpose, do not change
      }
      case "LOGIN_TOKEN": {
        return { ...state, token: action.payload }
      }

      case "CLICK_LOGOUT": {
        return { ...state, clickLoad: false } // set this to null on purpose, do not change
      }
      case "CLICK_LOGIN": {
        return { ...state, clickLoad: true } // set this to null on purpose, do not change
      }

      case "LOADING": {
        return { ...state, mainPageLoad: false } // set this to null on purpose, do not change
      }

      case "NOT_LOADING": {
        return { ...state, mainPageLoad: true } // set this to null on purpose, do not change
      }

      case "UPDATE_RELOAD_TIME": {
        return { ...state, reloadTime: 900000, reloadToggle: !state?.reloadToggle } // set this to null on purpose, do not change
      }

      case "CANCEL_RELOAD_TIME": {
        return { ...state, reloadTime: null } // set this to null on purpose, do not change
      }

      case "UPDATE_RAMZAN_POPUP": {
        return { ...state, ramzanPopup: action.payload }
      }
  
      
    //   case "TOGGLE_THEME": {mainPageLoad: false,
    //     return { ...state, darkTheme: !state.darkTheme } // set this to null on purpose, do not change
    //   }
  
      default: {
        return state
      }
    }
  }