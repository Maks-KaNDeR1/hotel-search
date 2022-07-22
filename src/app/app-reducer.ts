

let initialState = {
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


type SetStatusActionType = ReturnType<typeof setStatus>
type ErrorMessageType = ReturnType<typeof errorMessage>


export type AppActionsType =
    | SetStatusActionType
    | ErrorMessageType

export default appReducer;