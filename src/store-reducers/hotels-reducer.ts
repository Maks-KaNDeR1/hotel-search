import { HotelType } from "../api/api";
import { todaysLat } from "../common/date/date";
import { requestHotels } from "./hotels-sagas";



let initialState = {
    hotels: [] as HotelType[],
    location: 'Москва',
    checkIn: todaysLat,
    amountOfDays: 1
}


export type HotelsReducerType = typeof initialState

export const hotelsReducer = (state: HotelsReducerType = initialState, action: HotelsActionsType): HotelsReducerType => {
    switch (action.type) {
        case 'HOTELS/SET_HOTEL':
            return { ...state, hotels: [...action.hotels] }
        case 'HOTELS/SET_LOCATION':
            return { ...state, location: action.location }
        case 'HOTELS/SET_AMOUNT_OF_DAYS':
            return { ...state, amountOfDays: action.quantity }
        default:
            return state;
    }
};


export const setHotels = (hotels: HotelType[]) =>
    ({ type: 'HOTELS/SET_HOTEL', hotels } as const)

export const setLocation = (location: string) =>
    ({ type: 'HOTELS/SET_LOCATION', location } as const)

export const setAmountOfDays = (quantity: number) =>
    ({ type: 'HOTELS/SET_AMOUNT_OF_DAYS', quantity } as const)





type SetHotelsType = ReturnType<typeof setHotels>
type SetLocationType = ReturnType<typeof setLocation>
type SetAmountOfDaysType = ReturnType<typeof setAmountOfDays>

type RequestHotelsType = ReturnType<typeof requestHotels>

export type HotelsActionsType =
    SetHotelsType
    | SetLocationType
    | RequestHotelsType
    | SetAmountOfDaysType



