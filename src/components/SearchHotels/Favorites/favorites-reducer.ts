import { HotelType } from "../../../api/api";



let initialState = [
    { hotelId: 1, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscow d Hotel', stars: 1, priceAvg: 180000 },
    { hotelId: 2, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscow Marriott Grand Hotel', stars: 3, priceAvg: 239578 },
    { hotelId: 3, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Mosco Grand Hotel', stars: 4, priceAvg: 89890 },
    { hotelId: 4, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscow Marriott Grand Hotel', stars: 3, priceAvg: 455788 },
    { hotelId: 5, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscot Grand Hotel', stars: 5, priceAvg: 180000 },
    { hotelId: 6, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Moscow Marrnd Hotel', stars: 5, priceAvg: 180000 },
    { hotelId: 7, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Mootel', stars: 3, priceAvg: 180000 },
    { hotelId: 8, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Mo Grand Hotel', stars: 2, priceAvg: 180000 },
    { hotelId: 9, location: { name: 'Moscow', country: 'Russia' }, hotelName: 'Mosel', stars: 4, priceAvg: 180000 },
] as HotelType[]


export const favoritesReducer = (state = initialState, action: FavoritesActionsType) => {
    switch (action.type) {
        case 'FV/ADDED_FAVORITES_HOTEL':

            // return [
            //     ...state, {
            //         id: +new Date(),
            //         title: action.title,
            //         isDone: false
            //     }
            // ]
            return state
        case 'FV/REMOVE_HOTEL':
            return state.filter(f => f.hotelId !== action.id)
        default:
            return state;
    }
};


export const addedFavoritesHotel = () =>
    ({ type: 'FV/ADDED_FAVORITES_HOTEL' } as const)


export const removeHotel = (id: number) => ({ type: 'FV/REMOVE_HOTEL', id } as const)


type AddedFavoritesHotelType = ReturnType<typeof addedFavoritesHotel>
type SetRemoveHotelType = ReturnType<typeof removeHotel>

export type FavoritesActionsType =
    | AddedFavoritesHotelType
    | SetRemoveHotelType


