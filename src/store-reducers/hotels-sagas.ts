import { put, call } from "redux-saga/effects";
import { hotelsAPI, HotelType } from "../api/api";
import { errorMessage, setStatus } from "./app-reducer";
import { AxiosResponse } from "axios";
import { setAmountOfDays, setHotels, setLocation } from "./hotels-reducer";
import { checkOut } from "../common/date/date";


export function* requestHotelsWorkerSaga(action: ReturnType<typeof requestHotels>) {
    yield put(setStatus(true))
    yield put(setLocation(action.location))
    yield put(setAmountOfDays(action.amountOfDays))

    let check = checkOut(action.checkIn, action.amountOfDays)

    try {
        const res: AxiosResponse<HotelType[]> = yield call(hotelsAPI.getHotels, action.location, action.checkIn, check)
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


export const requestHotels = (location: string, checkIn: string, amountOfDays: number) =>
    ({ type: 'HOTELS/REQUEST_HOTELS', location, checkIn, amountOfDays } as const)


export type RequestHotelsType = ReturnType<typeof requestHotels>




