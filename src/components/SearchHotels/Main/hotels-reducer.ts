import { hotelsAPI, HotelType } from "../../../api/api";
import { AppThunk } from "../../../app/store";



let initialState = {
    // hotels: [] as HotelType[]
    hotels: [
        { hotelId: 1, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscow Marriott Grand Hotel', stars: 5, priceAvg: 180000 },
        { hotelId: 2, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscow Marriott Grand Hotel', stars: 3, priceAvg: 239578 },
        { hotelId: 3, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscow Marriott Grand Hotel', stars: 4, priceAvg: 89890 },
        { hotelId: 4, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscow Marriott Grand Hotel', stars: 3, priceAvg: 455788 },
        { hotelId: 5, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscow Marriott Grand Hotel', stars: 5, priceAvg: 180000 },
        { hotelId: 6, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscow Marriott Grand Hotel', stars: 5, priceAvg: 180000 },
        { hotelId: 7, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscow Marriott Grand Hotel', stars: 3, priceAvg: 180000 },
        { hotelId: 8, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscow Marriott Grand Hotel', stars: 2, priceAvg: 180000 },
        { hotelId: 9, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscow Marriott Grand Hotel', stars: 4, priceAvg: 180000 },
    ] as HotelType[]
}


export const hotelsReducer = (state = initialState, action: FavoritesActionsType) => {
    switch (action.type) {
        case 'HOTEL/ADD_HOTEL':
            return { ...state, hotels: [...action.hotels] }
        default:
            return state;
    }
};


export const setHotels = (hotels: HotelType[]) =>
    ({ type: 'HOTEL/ADD_HOTEL', hotels } as const)

export const requestHotels = (location?: string, checkIn?: string, checkOut?: string,): AppThunk =>
    async (dispatch) => {

        try {
            const res = await hotelsAPI.getHotels(location, checkIn, checkOut)
            console.log('====================================');
            console.log(res.data);
            console.log('====================================');
            // dispatch(setHotels(res.data))
        }
        catch (err: any) {

        }
        finally {

        }
    }


type SetHotelsType = ReturnType<typeof setHotels>

export type FavoritesActionsType = SetHotelsType



