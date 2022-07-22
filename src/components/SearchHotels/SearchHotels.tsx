import React from 'react'
import { Navigate } from 'react-router-dom'
import { Favorites } from './Favorites/Favorites'
import Header from './Header/Header'
import './SearchHotels.scss'
import { RequestParameters } from './RequestParameters/RequestParameters'
import { Main } from './Main/Main'
import { ErrorSnackbar } from '../ErrorSnackbar/ErrorSnackbar'

export const SearchHotels = () => {

    const sesstorage = sessionStorage.getItem('auth')
    const isAuth = sesstorage ? JSON.parse(sesstorage).isAuth : false

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
            <ErrorSnackbar />
        </div>
    )
}
