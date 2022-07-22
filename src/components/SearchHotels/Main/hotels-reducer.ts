import { Dispatch } from "redux";
import { hotelsAPI, HotelType } from "../../../api/api";
import { errorMessage, setStatus } from "../../../app/app-reducer";

let initialState = {
    hotels: [] as HotelType[],
    location: 'Moscow',
}


export type HotelsReducerType = typeof initialState

export const hotelsReducer = (state: HotelsReducerType = initialState, action: HotelsActionsType): HotelsReducerType => {
    switch (action.type) {
        case 'HOTEL/SET_HOTEL':
            return { ...state, hotels: [...action.hotels] }
        case 'HOTEL/SET_LOCATION':
            return { ...state, location: action.location }
        default:
            return state;
    }
};


export const setHotels = (hotels: HotelType[]) =>
    ({ type: 'HOTEL/SET_HOTEL', hotels } as const)

export const setLocation = (location: string) =>
    ({ type: 'HOTEL/SET_LOCATION', location } as const)



export const requestHotels = (location: string, checkIn: string, checkOut: string,) =>
    async (dispatch: Dispatch) => {

        dispatch(setStatus(true))
        dispatch(setLocation(location))
        try {
            const res = await hotelsAPI.getHotels(location, checkIn, checkOut)
            console.log(res.data);
            dispatch(setHotels(res.data))
        }
        catch (err: any) {
            console.log(err.response.data.message)
            dispatch(errorMessage(err.message))
        }
        finally {
            dispatch(setStatus(false))
        }
    }


type SetHotelsType = ReturnType<typeof setHotels>
type SetLocationType = ReturnType<typeof setLocation>

export type HotelsActionsType = SetHotelsType | SetLocationType



