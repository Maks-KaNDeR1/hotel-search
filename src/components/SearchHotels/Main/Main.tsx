import React, { useCallback, useEffect, useRef } from 'react'
import s from './Main.module.scss'
import { Hotel } from './Hotel/Hotel'
import { useAppDispatch, useAppSelector } from '../../../utils/hook'
import { requestHotels } from './hotels-reducer'
import { addedFavoritesHotel, removeHotel } from '../Favorites/favorites-reducer'
import { HotelType } from '../../../api/api'
import { todaysLat } from '../RequestParameters/RequestParameters'


export const Main = () => {

    const scroll = useRef<any>(null)

    const favorites = useAppSelector(state => state.favoriteHotel.length)
    const hotelsReducer = useAppSelector(state => state.hotel)
    const { hotels, location } = hotelsReducer

    const dispatch = useAppDispatch()

    const checkIn = todaysLat
    const checkOut = todaysLat

    useEffect(() => {
        dispatch(requestHotels(location, checkIn, checkOut))
    }, [])

    console.log(hotels);

    const addToFavoriteOnCLick = (hotel: HotelType) => {
        dispatch(addedFavoritesHotel(hotel))
    }

    const removeHotelOnClick = useCallback((id: number) => {
        dispatch(removeHotel(id))
    }, [dispatch])

    const hotelElements = hotels.map(h =>
        <Hotel key={h.hotelId} hotel={h} addToFavorite={addToFavoriteOnCLick} removeHotel={removeHotelOnClick}
        />
    )

    const handleClick = () => scroll.current.scrollIntoView({ behavior: 'smooth' })

    return (
        <div className={s.mainBlock} >
            <div className={s.header} >
                <h1>Отели {'>'} {location} </h1>
                <div className={s.date} > {checkIn} </div>
            </div>
            <div className={s.foto} >
                <img src="hhttps://maxi-booking.ru/wp-content/uploads/2019/07/hotel-main-575.jpg" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XMUeYlhCwHKqzssDJaCnXm7IspFHWeWD_Q&usqp=CAU" alt="" />
                <img src="https://hotel-attache.ru/images/nav-number.jpg" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZoE99TjA6w_5XPSb3LuDtM200xv8EY1kFg&usqp=CAU" alt="" />
                <img src="https://lexx-crimea.ru/sites/default/files/styles/large/public/images/pages/IMG_2854.jpg?itok=LaMF5Ikv" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6iO1irstqCb-n0Tx2eSzlQB3ppXxXPy8Ow&usqp=CAU" alt="" />

            </div>
            <div className={s.numberFavo}>
                <span>Добавлено в избранное {favorites} отеля</span>
            </div>
            <div className={s.hotelItem}>
                {
                    hotels.length > 0 ? hotelElements
                        : <h1>По данному запросу отелей не найдено!</h1>
                }
                <div ref={scroll}></div>
            </div>
            <span className={s.arrow}>
                {
                    hotels.length > 7 && <i
                        onClick={handleClick}
                        className="fa fa-arrow-circle-down"
                        aria-hidden="true">
                    </i>
                }
            </span>
        </div>
    )
}
