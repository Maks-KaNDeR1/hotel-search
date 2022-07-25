import axios, { AxiosResponse } from 'axios'

export const instance = axios.create({
    baseURL: 'http://engine.hotellook.com/api/v2/',
})

export const hotelsAPI = {
    getHotels(
        location: string,
        checkIn: string,
        checkOut: string,
    ): Promise<AxiosResponse<HotelType[]>> {
        return instance.get<HotelType[]>(
            'cache.json', {
            params: {
                location,
                currency: 'rub',
                checkIn,
                checkOut,
                limit: 10,
                adults: 1,
            }
        })
    }
}


export type HotelType = {
    hotelId: number
    hotelName: string
    location: {
        country: string
        geo: {
            lon: number
            lat: number
        }
        name: string
        state: null
    }
    locationId: number
    priceAvg: number
    priceFrom: number
    pricePercentile: {}
    stars: number
}