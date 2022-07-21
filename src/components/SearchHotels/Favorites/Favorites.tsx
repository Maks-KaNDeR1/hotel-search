import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../../utils/hook'
import { removeHotel } from './favorites-reducer'
import s from './Favorites.module.scss'
import Hotel from './Hotel/FavoriteHotel'

export const Favorites = () => {

    const hotels = useAppSelector(state => state.favoriteHotel)
    // const dispatch = useAppDispatch()
    const dispatch = useDispatch<any>()


    let [sortHotels, setSortHotels] = useState(hotels)


    let [rating, setRating] = useState(true)
    let [price, setPrice] = useState(true)

    const [show, setShow] = useState(false)

    // const removeHotelOnClick = (id: number) => {
    //     dispatch(removeHotel(id))
    // }
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


    useEffect(() => {
        const handleShow = () => {
            if (window.scrollY < 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleShow);
        return () => {
            window.removeEventListener("scroll", handleShow);
        };
    }, [])

    return (
        <div className={s.favoritesBlock} >
            <h1> Избранное</h1>
            <div className={s.sorting}>
                <button onClick={clickHandlerOnRating}>Рейтинг
                    {rating ?
                        <span className={s.angle} >
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true" style={{ color: '#a5a5a5' }} ></i>
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
                        <span className={s.angle} >
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true" style={{ color: '#a5a5a5' }} ></i>
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
                {hotels.map(h => <Hotel
                    key={h.hotelId}
                    hotels={h}
                    removeHotel={removeHotelOnClick}
                />)}
            </div>
            <span className={s.arrow}>
                {
                    // (hotels.length > 3 && show) && <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                    hotels.length > 3 && <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                }
            </span>
        </div>
    )
}
