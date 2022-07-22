import React, { useState } from 'react'
import { HotelType } from '../../../../api/api'
import { hotelStars } from '../../../../common/HotelStars/HotelStars'
import s from './Hotel.module.scss'

type PropsType = {
    hotel: HotelType
    removeHotel: (id: number) => void
    addToFavorite: (hotel: HotelType) => void
    refValue?: any
}

export const Hotel: React.FC<PropsType> = ({ hotel, addToFavorite, removeHotel, refValue }) => {

    const { hotelId, hotelName, priceAvg, stars } = hotel
    const [likeIt, setLikeIt] = useState(false)

    const handleClick = () => {
        if (!likeIt) {
            setLikeIt(true)
            addToFavorite(hotel)
        } else {
            setLikeIt(false)
            removeHotel(hotelId)
        }
    }


    return (
        <div className={s.itemBlock} ref={refValue}>
            <div className={s.iconHome}>
                <i className="fa fa-home" aria-hidden="true"></i>
            </div>
            <div className={s.item}>
                <div>
                    <span className={s.title}> {hotelName} </span>
                    <button className={s.heart} onClick={handleClick} >
                        {likeIt ?
                            <i className="fa fa-heart" aria-hidden="true" style={{ color: 'red' }}></i>
                            :
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                        }
                    </button>
                </div>
                <span>28 June, 2022 - 1 day </span>
                <div className={s.stars}>
                    {hotelStars(stars)}
                </div>
                <div className={s.price}> <span>price</span>{priceAvg} P</div>
                <div className={s.partition} ></div>
            </div>
        </div>
    )
}


