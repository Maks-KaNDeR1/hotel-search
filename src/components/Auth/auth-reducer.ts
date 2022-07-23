
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
