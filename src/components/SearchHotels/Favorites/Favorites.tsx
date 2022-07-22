import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector, useIsInViewport } from '../../../utils/hook'
import { removeHotel } from './favorites-reducer'
import s from './Favorites.module.scss'
import Hotel from './Hotel/FavoriteHotel'

export const Favorites = () => {
    const ref1 = useRef(null)
    const isInViewport1 = useIsInViewport(ref1)
    const hotels = useAppSelector(state => state.favoriteHotel)
    // const dispatch = useAppDispatch()
    const dispatch = useDispatch<any>()

    let [sortHotels, setSortHotels] = useState(hotels)

    useEffect(() => {
        // 👇️ listen for changes
        console.log(isInViewport1)
    }, [isInViewport1])

    let [rating, setRating] = useState(true)
    let [price, setPrice] = useState(true)

    const removeHotelOnClick = useCallback((id: number) => {
        dispatch(removeHotel(id))
    }, [dispatch])

    let clickHandlerOnRating = () => {
        if (rating) {
            setSortHotels(sortHotels.sort((a, b) => a.stars > b.stars ? -1 : 1))
            setRating(false)
        } else {
            setSortHotels(sortHotels.sort((a, b) => a.stars > b.stars ? 1 : -1))
            setRating(true)
        }
    }

    let clickHandlerOnPrice = () => {
        if (price) {
            setSortHotels(sortHotels.sort((a, b) => a.priceAvg > b.priceAvg ? -1 : 1))
            setPrice(false)
        } else {
            setSortHotels(sortHotels.sort((a, b) => a.priceAvg > b.priceAvg ? 1 : -1))
            setPrice(true)
        }
    }


    return (
        <div className={s.favoritesBlock}>
            <h1> Избранное</h1>
            <div className={s.sorting}>
                <button onClick={clickHandlerOnRating}>Рейтинг
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
                    {price ?
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
            </div>
            <div className={s.hotelItem}>
                {hotels.map((h, i, c) => {
                    if (i === c.length - 1) return <Hotel
                        refValue={ref1}
                        key={h.hotelId}
                        hotels={h}
                        removeHotel={removeHotelOnClick}
                    />
                    return (
                        <Hotel
                            key={h.hotelId}
                            hotels={h}
                            removeHotel={removeHotelOnClick}
                        />
                    )
                },
                )}
            </div>
            {isInViewport1 ? <></> : <span className={s.arrow}>
                {
                    hotels.length > 3 && <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                }
            </span>}
        </div>
    )
}
