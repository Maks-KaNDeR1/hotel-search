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
        country: "Russia"
        geo: {
            lon: 37.617508
            lat: 37.617508
        }
        name: "Moscow"
        state: null
    }
    locationId: 12153
    priceAvg: 146704.81
    priceFrom: 146704.81
    pricePercentile: {}
    stars: 5
}