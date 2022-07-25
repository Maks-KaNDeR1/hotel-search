import React from 'react'
import { Navigate } from 'react-router-dom'
import { Favorites } from './Favorites/Favorites'
import Header from './Header/Header'
import './SearchHotels.scss'
import { RequestParameters } from './RequestParameters/RequestParameters'
import { Main } from './Main/Main'
import { ErrorSnackbar } from '../ErrorSnackbar/ErrorSnackbar'
import { useAppSelector } from '../../utils/hook'
import { LinearProgress } from '@mui/material'

export const SearchHotels = () => {

    const loading = useAppSelector(state => state.app.statusLoading)
    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (!isAuth) {
        return <Navigate to='/login' />
    }

    return (
        <div className="main-wrapper">
            {loading && <LinearProgress sx={linearStyle} />}
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


let linearStyle: React.CSSProperties = {
    position: 'absolute',
    top: '1vh',
    width: '1440px',
    height: '5px'
}
