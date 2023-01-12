import { types } from "../types/types";

// const initialState = {
//     logged: false,
// }

export const authReducer = ( state = {}, action ) => {

    //Please don´t interact wt localstorage from here

    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        
        case types.logout:
            return {
                logged: false
            };
    
        default:
            return state;
    }

}