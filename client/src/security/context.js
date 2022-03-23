import React, { useReducer, createContext } from 'react'

const initialState = {
    user: null
}

if(localStorage.getItem('id')) {
    const state = localStorage.getItem('id')
    if(state.expected * 1000 < Date.now()) {
        localStorage.removeItem('id')
    } else {
        initialState.user = state
    }
}

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {}
});

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}

const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const login = (userData) => {
        localStorage.setItem("id", userData.id)
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
    }

    const logout = () => {
        localStorage.removeItem('id')
        dispatch({type: 'LOGOUT'})
    } 

    return (
        <AuthContext.Provider 
            value={{ user: state.user, login, logout}}
            {...props}
        />
    )
}

export { AuthContext, AuthProvider }