import { HotelType } from "../../../api/api";



let initialState = [
    {
        hotelId: 333578,
        hotelName: "Moscow Marriott Grand Hotel",
        location: { name: 'Moscow', country: 'Russia' },
        locationId: 12153,
        priceAvg: 146704.81,
        stars: 5
    },
    {
        hotelId: 480240,
        hotelName: "AZIMUT Hotel Smolenskaya Moscow",
        location: { country: 'Russia', name: 'Moscow' },
        locationId: 12153,
        priceAvg: 189720.19,
        stars: 4
    },
    {
        hotelId: 1277700,
        hotelName: "Smolenskaya Moscow",
        location: { country: 'Russia', name: 'Moscow' },
        locationId: 12153,
        priceAvg: 77900,
        stars: 3
    },
    {
        hotelId: 45650,
        hotelName: "Hotel Krasnodar",
        location: { country: 'Russia', name: 'Krasnodar' },
        locationId: 12153,
        priceAvg: 45650,
        stars: 2
    },
    {
        hotelId: 156500,
        hotelName: "Hotlenskaya Volgograd",
        location: { country: 'Russia', name: 'Volgograd' },
        locationId: 12153,
        priceAvg: 180000,
        stars: 4
    },
] as HotelType[]


export type FavoritesReducerType = typeof initialState

export const favoritesReducer = (state: FavoritesReducerType = initialState, action: FavoritesActionsType) => {
    switch (action.type) {
        case 'FV/ADDED_FAVORITES_HOTEL':
            return {
                ...state,
                // hotels: [...state.favoriteHotels, action.hotel]
                // state.push(action.hotel)
                // ...action.hotel, ...state

            }
        case 'FV/REMOVE_HOTEL':
            return state.filter(f => f.hotelId !== action.id)
        default:
            return state;
    }
};


export const addedFavoritesHotel = (hotel: HotelType) =>
    ({ type: 'FV/ADDED_FAVORITES_HOTEL', hotel } as const)


export const removeHotel = (id: number) => ({ type: 'FV/REMOVE_HOTEL', id } as const)


type AddedFavoritesHotelType = ReturnType<typeof addedFavoritesHotel>
type SetRemoveHotelType = ReturnType<typeof removeHotel>

export type FavoritesActionsType =
    | AddedFavoritesHotelType
    | SetRemoveHotelType


