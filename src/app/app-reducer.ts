

let initialState = {
    initialized: false,
    statusLoading: false,
    error: ''
};

export type InitialStateType = typeof initialState


const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return { ...state, statusLoading: action.status }
        case 'APP/ERROR_MESSAGE':
            return { ...state, error: action.error }
        default:
            return state;
    }
}


export const setStatus = (status: boolean) => ({ type: 'APP/SET-STATUS', status } as const)
export const errorMessage = (error: string) => ({ type: 'APP/ERROR_MESSAGE', error } as const)
export const errorCode = (code: number) => ({ type: 'APP/ERROR_CODE', code } as const)


type SetStatusActionType = ReturnType<typeof setStatus>
type ErrorCodeType = ReturnType<typeof errorCode>
type ErrorMessageType = ReturnType<typeof errorMessage>


export type AppActionsType =
    | SetStatusActionType
    | ErrorMessageType
    | ErrorCodeType


export default appReducer;