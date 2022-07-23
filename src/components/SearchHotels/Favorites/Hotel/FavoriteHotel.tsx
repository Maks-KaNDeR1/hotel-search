import React, { useState } from 'react'
import { HotelType } from '../../../../api/api'
import { hotelStars } from '../../../../common/HotelStars/HotelStars'
import s from './FavoriteHotel.module.scss'

type PropsType = {
    hotel: HotelType
    removeHotel: (id: number) => void
}

const FavoriteHotel: React.FC<PropsType> = ({ hotel, removeHotel }) => {
    const { hotelId, hotelName, priceAvg, stars } = hotel

    const handleClick = () => {
        removeHotel(hotelId)
    }

    return (
        <div className={s.item}>
            <div>
                <span className={s.title}> {hotelName} </span>
                <button className={s.heart} onClick={handleClick}>
                    <i className="fa fa-heart" aria-hidden="true" style={{ color: 'red' }}></i>
                </button>
            </div>
            <span>28 June, 2022 - 1 day </span>
            <div className={s.stars}>
                {hotelStars(stars)}
            </div>
            <div className={s.price}> <span>price</span> {priceAvg}</div>
            <div className={s.partition} ></div>
        </div>
    )
}


export default FavoriteHotel
