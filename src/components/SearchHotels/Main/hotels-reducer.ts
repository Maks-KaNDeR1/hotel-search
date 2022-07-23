import { put, call } from "redux-saga/effects";
import { hotelsAPI, HotelType } from "../../../api/api";
import { errorMessage, setStatus } from "../../../app/app-reducer";
import { AxiosResponse } from "axios";

let initialState = {
    hotels: [] as HotelType[],
    location: 'Москва',
}


export type HotelsReducerType = typeof initialState

export const hotelsReducer = (state: HotelsReducerType = initialState, action: HotelsActionsType): HotelsReducerType => {
    switch (action.type) {
        case 'HOTELS/SET_HOTEL':
            return { ...state, hotels: [...action.hotels] }
        case 'HOTELS/SET_LOCATION':
            return { ...state, location: action.location }
        default:
            return state;
    }
};


export const setHotels = (hotels: HotelType[]) =>
    ({ type: 'HOTELS/SET_HOTEL', hotels } as const)

export const setLocation = (location: string) =>
    ({ type: 'HOTELS/SET_LOCATION', location } as const)



export function* requestHotelsWorkerSaga(action: ReturnType<typeof requestHotels>) {
    yield put(setStatus(true))
    yield put(setLocation(action.location))
    try {
        const res: AxiosResponse<HotelType[]> = yield call(hotelsAPI.getHotels, action.location, action.checkIn, action.checkOut)
        yield put(setHotels(res.data))
    }
    catch (err: any) {
        console.log(err.response.data.message)
        yield put(errorMessage(err.message))
    }
    finally {
        yield put(setStatus(false))
    }
}


export const requestHotels = (location: string, checkIn: string, checkOut: string) =>
    ({ type: 'HOTELS/REQUEST_HOTELS', location, checkIn, checkOut } as const)


type SetHotelsType = ReturnType<typeof setHotels>
type SetLocationType = ReturnType<typeof setLocation>
type RequestHotelsType = ReturnType<typeof requestHotels>

export type HotelsActionsType = SetHotelsType | SetLocationType | RequestHotelsType



