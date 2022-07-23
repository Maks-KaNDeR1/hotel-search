import React, { useCallback, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../utils/hook'
import { removeHotel } from './favorites-reducer'
import s from './Favorites.module.scss'
import Hotel from './Hotel/FavoriteHotel'

export const Favorites = () => {

    const scroll = useRef<any>(null)

    const hotels = useAppSelector(state => state.favoriteHotel)
    const dispatch = useAppDispatch()

    const [sortHotels, setSortHotels] = useState(hotels)
    const [rating, setRating] = useState(true)
    const [price, setPrice] = useState(true)

    const handleClick = () => scroll.current.scrollIntoView({ behavior: 'smooth' })

    const removeHotelOnClick = useCallback((id: number) => {
        dispatch(removeHotel(id))
    }, [dispatch])

    const clickHandlerOnRating = () => {
        if (rating) {
            setSortHotels(sortHotels.sort((a, b) => a.stars > b.stars ? -1 : 1))
            setRating(false)
        } else {
            setSortHotels(sortHotels.sort((a, b) => a.stars > b.stars ? 1 : -1))
            setRating(true)
        }
    }
    const clickHandlerOnPrice = () => {
        if (price) {
            setSortHotels(sortHotels.sort((a, b) => a.priceAvg > b.priceAvg ? -1 : 1))
            setPrice(false)
        } else {
            setSortHotels(sortHotels.sort((a, b) => a.priceAvg > b.priceAvg ? 1 : -1))
            setPrice(true)
        }
    }

    const hotelElements = hotels.map(h =>
        <Hotel key={h.hotelId} hotel={h} removeHotel={removeHotelOnClick} />
    )


    console.log(hotelElements);
    console.log(sortHotels);
    console.log(rating);
    console.log(price);
    console.log(hotelElements);
    console.log(hotelElements);


    const sort = (sort: boolean) => {
        return (
            <span>
                {
                    sort ?
                        <span className={s.angle}>
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true" style={{ color: '#a5a5a5' }}></i>
                        </span>
                        :
                        <span className={s.angle}>
                            <i className="fa fa-angle-up" aria-hidden="true" style={{ color: '#a5a5a5' }}></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                }
            </span>
        )
    }


    return (
        <div className={s.favoritesBlock}>
            <h1> Избранное</h1>
            <div className={s.sorting}>
                <button onClick={clickHandlerOnRating}>Рейтинг
                    {/* {sort(rating)} */}
                    {rating ?
                        <span className={s.angle}>
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true" style={{ color: '#a5a5a5' }}></i>
                        </span>
                        :
                        <span className={s.angle}>
                            <i className="fa fa-angle-up" aria-hidden="true" style={{ color: '#a5a5a5' }}></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    }
                </button>
                <button onClick={clickHandlerOnPrice}>Цена
                    {sort(price)}
                    {/* {price ?
                        <span className={s.angle}>
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true" style={{ color: '#a5a5a5' }}></i>
                        </span>
                        :
                        <span className={s.angle}>
                            <i className="fa fa-angle-up" aria-hidden="true" style={{ color: '#a5a5a5' }}></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    } */}
                </button>
            </div>
            <div className={s.hotelItem}>
                {
                    hotels.length > 0 ? hotelElements : <h1>Пусто</h1>
                }
                <div ref={scroll}></div>
            </div>
            <span className={s.arrow}>
                {
                    hotels.length > 3 && <i
                        onClick={handleClick}
                        className="fa fa-arrow-circle-down"
                        aria-hidden="true">
                    </i>
                }
            </span>
        </div>
    )
}

