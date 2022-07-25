import React, { useCallback, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../utils/hook'
import { removeHotel, setSortHotels, setSortHotelsInReverse, setSortHotelsInReverseOnPrice, setSortHotelsOnPrice } from './favorites-reducer'
import s from './Favorites.module.scss'
import Hotel from './Hotel/FavoriteHotel'

export const Favorites: React.FC = React.memo(() => {

    const hotels = useAppSelector(state => state.favoriteHotel)
    const dispatch = useAppDispatch()

    const [rating, setRating] = useState(true)
    const [price, setPrice] = useState(true)

    const [sortActive, setSortActive] = useState<'rating' | 'price' | null>(null)

    const removeHotelOnClick = useCallback((id: number) => {
        dispatch(removeHotel(id))
    }, [dispatch])

    const clickHandlerOnRating = () => {
        setSortActive('rating')
        if (rating) {
            dispatch(setSortHotels())
            setRating(false)
        } else {
            dispatch(setSortHotelsInReverse())
            setRating(true)
        }
    }
    const clickHandlerOnPrice = () => {
        setSortActive('price')
        if (price) {
            dispatch(setSortHotelsOnPrice())
            setPrice(false)
        } else {
            dispatch(setSortHotelsInReverseOnPrice())
            setPrice(true)
        }
    }

    const angles = (sort: boolean) => {
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

    const scroll = useRef<HTMLDivElement | null>(null)

    const handleClick = () => scroll.current?.scrollIntoView({ behavior: 'smooth' })

    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 100) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    const hotelElements = hotels.map(h =>
        <Hotel key={h.hotelId} hotel={h} removeHotel={removeHotelOnClick} />
    )

    return (
        <div className={s.favoritesBlock}>
            <h1> Избранное</h1>
            <div className={s.sorting}>
                <button onClick={clickHandlerOnRating}
                    className={sortActive === 'rating' ? s.active : ''}
                >
                    Рейтинг {angles(rating)}
                </button>
                <button onClick={clickHandlerOnPrice}
                    className={sortActive === 'price' ? s.active : ''}
                >
                    Цена {angles(price)}
                </button>
            </div>
            <div className={s.hotelItem} onScroll={scrollHandler}>
                {
                    hotels.length > 0 ? hotelElements : <h1>Пусто</h1>
                }
                <div ref={scroll}></div>
            </div>
            <span className={s.arrow}>
                {
                    !isAutoScroll && hotels.length > 3 && <i
                        onClick={handleClick}
                        className="fa fa-arrow-circle-down"
                        aria-hidden="true">
                    </i>
                }
            </span>
        </div>
    )
})

