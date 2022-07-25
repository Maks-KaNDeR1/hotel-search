import React, { useState } from 'react'
import { HotelType } from '../../../../api/api'
import { todaysDate } from '../../../../common/date/date'
import { hotelStars } from '../../../../common/HotelStars/HotelStars'
import s from './Hotel.module.scss'

type PropsType = {
    hotel: HotelType
    removeHotel: (id: number) => void
    addToFavorite: (hotel: HotelType) => void
    amountOfDays: number
}

export const Hotel: React.FC<PropsType> = React.memo(({ hotel, amountOfDays, addToFavorite, removeHotel }) => {
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
        <div className={s.itemBlock}>
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
                <span className={s.date}> {todaysDate}
                    <span> - </span>
                    {amountOfDays} {amountOfDays > 1 ? "дней" : 'день'}
                </span>
                <div className={s.stars}>
                    {hotelStars(stars)}
                </div>
                <div className={s.price}> <span>price</span>{priceAvg * amountOfDays} ₽</div>
            </div>
        </div>
    )
})


