import React from 'react'
import { useAppDispatch } from '../../../utils/hook'
import { setIsInitialize } from '../../../store-reducers/auth-reducer'
import s from './Header.module.scss'


export const Header = () => {

    const dispatch = useAppDispatch()

    const handleClick = () => {
        sessionStorage.setItem('auth', JSON.stringify({ isAuth: false }))
        let isAuth = false
        dispatch(setIsInitialize(isAuth))
    }

    return (
        <header >
            <div className={s.title}>
                Simple Hotel Check
            </div>
            <div>
                <button onClick={handleClick} >
                    Bыйти
                    <i className="fa fa-sign-out" style={{ fontSize: '25px' }} aria-hidden="true"></i>
                </button>
            </div>
        </header>
    )
}

export default Header