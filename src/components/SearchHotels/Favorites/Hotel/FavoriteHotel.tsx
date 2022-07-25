import React from 'react'
import { HotelType } from '../../../../api/api'
import { todaysDate } from '../../../../common/date/date'
import { hotelStars } from '../../../../common/HotelStars/HotelStars'
import { useAppSelector } from '../../../../utils/hook'
import s from './FavoriteHotel.module.scss'

type PropsType = {
    hotel: HotelType
    removeHotel: (id: number) => void
}

const FavoriteHotel: React.FC<PropsType> = React.memo(({ hotel, removeHotel }) => {
    const { hotelId, hotelName, priceAvg, stars } = hotel

    const amountOfDays = useAppSelector(state => state.hotel.amountOfDays)

    const handleClick = () => {
        removeHotel(hotelId)
    }

    return (
        <div className={s.item}>
            <div>
                <span className={s.title}> {hotelName} </span>
                <button className={s.heart}
                    onClick={handleClick}>
                    <i className="fa fa-heart" aria-hidden="true" style={{ color: 'red' }}></i>
                </button>
            </div>
            <span className={s.date}> {todaysDate}
                <span> - </span>
                {amountOfDays} {amountOfDays > 1 ? "day's" : 'day'}
            </span>
            <div className={s.stars}>
                {hotelStars(stars)}
            </div>
            <div className={s.price}>
                <span>Price</span>
                {priceAvg * amountOfDays} ₽
            </div>
            <div className={s.partition} ></div>
        </div>
    )
});


export default FavoriteHotel
