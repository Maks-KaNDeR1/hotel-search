import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { Favorites } from './Favorites/Favorites'
import Header from './Header/Header'
import './SearchHotels.scss'
import { RequestParameters } from './RequestParameters/RequestParameters'
import { Main } from './Main/Main'
import { requestHotels } from './Main/hotels-reducer'

export const SearchHotels = () => {


    // let isAuth = useAppSelector(state => state.auth.isAuth)
    let { isAuth } = JSON.parse(sessionStorage.getItem('auth') ?? '')

    console.log(isAuth);


    if (!isAuth) {
        return <Navigate to='/login' />
    }

    return (
        <div className="main-wrapper">
            <Header />
            <div className="main-wrapper-content" >
                <RequestParameters />
                <Favorites />
                <Main />
            </div>
        </div>
    )
}
