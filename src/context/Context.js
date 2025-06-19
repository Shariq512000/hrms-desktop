import React, { createContext, useReducer } from 'react'
import { reducer } from './Reducer';

export const GlobalContext = createContext("Initial Value");

let data = {
    clickLoad: false,
    darkTheme: true,
    user: {},
    ramzanPopup:{},
    isLogin: null,
    token:"",
    reloadTime: null,
    reloadToggle: false,
    // baseUrl: "https://vpserver.org/hrms/",
    // baseUrl: "https://dinopeoples.io/hrms-api/",
    mainPageLoad: false,
    // basePath: ""
    // basePath: "/new-dashboard" //For Live
    basePath: `${process.env.PUBLIC_URL}` //For Live
}

export default function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, data);
    const reloadSetTime = () => {
        dispatch({type: "UPDATE_RELOAD_TIME"})
    }
    return (
        <GlobalContext.Provider value={{ state, dispatch, reloadSetTime }}>
            {children}
        </GlobalContext.Provider>
    )
}