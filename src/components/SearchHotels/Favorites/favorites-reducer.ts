import { HotelType } from "../../../api/api";



let initialState = [] as HotelType[]


export type FavoritesReducerType = typeof initialState

export const favoritesReducer = (state: FavoritesReducerType = initialState, action: FavoritesActionsType): FavoritesReducerType => {
    switch (action.type) {
        case 'FV/ADDED_FAVORITES_HOTEL':
            return [action.hotel, ...state]
        case 'FV/REMOVE_HOTEL':
            return state.filter(f => f.hotelId !== action.id)
        case 'FV/SORT_HOTELS':
            return [...state.sort((a, b) => a.stars > b.stars ? -1 : 1)]
        case 'FV/SORT_HOTELS_IN_REVERSE':
            return [...state.sort((a, b) => a.stars > b.stars ? 1 : -1)]
        case 'FV/SORT_HOTELS_ON_PRICE':
            return [...state.sort((a, b) => a.priceAvg > b.priceAvg ? -1 : 1)]
        case 'FV/SORT_HOTELS_IN_REVERSE_ON_PRICE':
            return [...state.sort((a, b) => a.priceAvg > b.priceAvg ? 1 : -1)]
        default:
            return state;
    }
};


export const addedFavoritesHotel = (hotel: HotelType) =>
    ({ type: 'FV/ADDED_FAVORITES_HOTEL', hotel } as const)

export const removeHotel = (id: number) => ({ type: 'FV/REMOVE_HOTEL', id } as const)

export const setSortHotels = () =>
    ({ type: 'FV/SORT_HOTELS' } as const)

export const setSortHotelsInReverse = () =>
    ({ type: 'FV/SORT_HOTELS_IN_REVERSE' } as const)

export const setSortHotelsOnPrice = () =>
    ({ type: 'FV/SORT_HOTELS_ON_PRICE' } as const)

export const setSortHotelsInReverseOnPrice = () =>
    ({ type: 'FV/SORT_HOTELS_IN_REVERSE_ON_PRICE' } as const)




type AddedFavoritesHotelType = ReturnType<typeof addedFavoritesHotel>
type SetRemoveHotelType = ReturnType<typeof removeHotel>

type SetSortHotelsType = ReturnType<typeof setSortHotels>
type SetSortHotelsInReverseType = ReturnType<typeof setSortHotelsInReverse>
type SetSortHotelsOnPriceType = ReturnType<typeof setSortHotelsOnPrice>
type SetSortHotelsOnPriceInReverseType = ReturnType<typeof setSortHotelsInReverseOnPrice>

export type FavoritesActionsType =
    | AddedFavoritesHotelType
    | SetRemoveHotelType
    | SetSortHotelsType
    | SetSortHotelsInReverseType
    | SetSortHotelsOnPriceType
    | SetSortHotelsOnPriceInReverseType


