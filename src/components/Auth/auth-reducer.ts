
import { AppThunk } from "../../app/store";


let initialState = {
    email: '',
    password: '',
    isAuth: false
}


export type InitialStateType = typeof initialState;

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};



export const setAuthUserData = (email: string, password: string, isAuth: boolean) =>
    ({ type: 'AUTH/SET_USER_DATA', payload: { email, password, isAuth } } as const)


type SetAuthUserDataType = ReturnType<typeof setAuthUserData>

export type AuthActionsType = SetAuthUserDataType

export const login = (email: string, password: string, isAuth: boolean): AppThunk =>
    (dispatch) => {
        dispatch(setAuthUserData(email, password, isAuth))
    }

export const Logout = (): AppThunk => (dispatch) => {
    // let data = { email: '', login: '', isAuth: false  }
    let email = '', password = '', isAuth = false
    dispatch(setAuthUserData(email, password, isAuth))
}


type AuthDataType = {
    email: string,
    login: string,
    isAuth: boolean
}