import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://engine.hotellook.com/api/v2/cache.json?',
    withCredentials: true,
    headers: {
        // 'Access-Control-Allow-Origin': 'localhost:3000'
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})


// 'Access-Control-Allow-Origin' : '*',
// 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
// "cache.json?location=Moscow&currency=rub&checkIn=2022-09-22&checkOut=2022-10-12&limit=10"


export const hotelsAPI = {
    getHotels(
        location = 'Moscow',
        checkIn: string | undefined,
        checkOut: string | undefined,
        limit?: number,
    ) {
        return instance.get<HotelType>(`location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=${limit}&adults=1`)
    }
}
//(https://passport.travelpayouts.com/xapi/oauth2/authorize, { email, password })

export type HotelType = {
    hotelId: number // 333578,
    location: {
        geo: {
            lon: number //37.617508,
            lat: number //55.752041
        },
        name: string //"Moscow",
        country: string //"Russia",
        state: null
    },
    pricePercentile: {
        3: number // 180000,
        10: number // 180000,
        35: number // 180000,
        50: number // 180000,
        75: number // 180000,
        99: number // 180000
    },
    stars: number // 5,
    hotelName: string // "Moscow Marriott Grand Hotel",
    priceFrom: number // 180000,
    locationId: number //12153,
    priceAvg: number //180000
}