//This component provides the context to my application

import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const initialState = {
    logged: false
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user, //if user exists, it will be true
        user // and user will be returned too
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    const login = ( name = '' ) => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name
            }
        }
        dispatch(action)
    }

  return (
    <AuthContext.Provider value={{
        ...authState,
        login: login
    }}>
        { children }
    </AuthContext.Provider>
  )
}
