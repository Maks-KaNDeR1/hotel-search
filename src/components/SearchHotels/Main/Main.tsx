import React, { useCallback, useEffect, useRef, useState } from 'react'
import s from './Main.module.scss'
import { Hotel } from './Hotel/Hotel'
import { useAppDispatch, useAppSelector } from '../../../utils/hook'
import { addedFavoritesHotel, removeHotel } from '../../../store-reducers/favorites-reducer'
import { HotelType } from '../../../api/api'
import { Spin } from 'antd'
import { todaysLat, todaysDate } from '../../../common/date/date'
import { requestHotels } from '../../../store-reducers/hotels-sagas'


export const Main: React.FC = () => {

    const favorites = useAppSelector(state => state.favoriteHotel.length)
    const hotelsReducer = useAppSelector(state => state.hotel)
    const { hotels, location } = hotelsReducer

    const loading = useAppSelector(state => state.app.statusLoading)
    const dispatch = useAppDispatch()

    const checkIn = todaysLat
    const amountOfDays = 1

    useEffect(() => {
        dispatch(requestHotels('Моdgdfgсква', checkIn, amountOfDays))
    }, [])

    const addToFavoriteOnCLick = useCallback((hotel: HotelType) => {
        dispatch(addedFavoritesHotel(hotel))
    }, [dispatch])

    const removeHotelOnClick = useCallback((id: number) => {
        dispatch(removeHotel(id))
    }, [dispatch])


    const scroll = useRef<HTMLDivElement | null>(null)

    const handleClick = () => scroll.current?.scrollIntoView({ behavior: 'smooth' })

    const [isAutoScroll, setIsAutoScroll] = useState(true)
    const [propmt, setPropmt] = useState(false)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 200) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    const hotelElements = hotels.map(h => <Hotel
        key={h.hotelId}
        hotel={h}
        addToFavorite={addToFavoriteOnCLick}
        removeHotel={removeHotelOnClick}
    />
    )

    return (
        <div className={s.mainBlock} >
            <div className={s.header} >
                <h1> Отели
                    <i className="fa fa-angle-right" aria-hidden="true" style={{ color: '#a5a5a5', margin: '0 12px' }}></i>
                    {location}
                </h1>
                <div className={s.date} > {todaysDate} </div>
            </div>
            <div className={s.foto} >
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1c/ef/2e/24/lotte-hotel-moscow-at.jpg" alt="" />
                <img src="https://hotel-attache.ru/images/nav-number.jpg" alt="Moscow Marriott Grand Hotel" />
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/5d/57/63/four-seasons-executive-room--v176.jpg" alt="" />
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/2b/1d/52/caption.jpg" alt="Golden Ring Hotel" />
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/02/2d/77/00/presidential-suite.jpg" alt="" />
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/22/c5/ac/b3/exterior.jpg" alt="" />
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/5d/0d/f7/lounge--v17633359.jpg" alt="" />
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/21/92/8d/d5/hotel-exterior.jpg" alt="" />
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/21/83/cf/99/indoor-swimming-pool.jpg" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZoE99TjA6w_5XPSb3LuDtM200xv8EY1kFg&usqp=CAU" alt="" />
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/69/01/f1/caption.jpg" alt="" />
            </div>
            <div className={s.numberFavo}>
                <span>Добавлено в избранное <b>{favorites}</b> отеля</span>
            </div>
            {
                loading
                    ? <div className={s.spin}>
                        <Spin size='large' />
                    </div>
                    :
                    <div className={s.hotelItem} onScroll={scrollHandler}>
                        {
                            hotels.length > 0 ? hotelElements
                                : <div> <h1>По данному запросу отелей не найдено!</h1>
                                    <span className={s.prompt} onDoubleClick={() => setPropmt(value => !value)} >
                                        {
                                            !propmt ? <b className={s.promptText}>Подсказка</b>
                                                : <span>
                                                    <b className={s.promptText}>Подсказка:</b>
                                                    "для chrome" если вы только зашли и у вас не работает приложение, то
                                                    <br />1. зайдите в настройки.
                                                    <br />2. Выберите <b> Конфиденциальность и безопасность</b> {'>'} <b>Настройки сайтов.</b>
                                                    <br />3. Нажмите <b>Дополнительные настройки контента</b> {'>'} <b>Небезопасный контент.</b>
                                                    <br /> <b> Либо</b> вставьте эту ссылку <b>chrome://settings/content/insecureContent</b> в адресную стоку браузера
                                                    <br />4. Рядом с надписью "Разрешить сайтам показывать небезопасный контент" нажмите кнопку <b>Добавить.</b>
                                                    <br />5. введите адрес maks-kander1.github.io
                                                </span>
                                        }
                                    </span>
                                </div>
                        }
                        <div ref={scroll}></div>
                    </div>
            }
            <span className={s.arrow}>
                {
                    !isAutoScroll && !loading && hotels.length > 7 && <i
                        onClick={handleClick}
                        className="fa fa-arrow-circle-down"
                        aria-hidden="true">
                    </i>
                }
            </span>
        </div >
    )
}
