import React from 'react'
import { useAppDispatch } from '../../../utils/hook'
import { Logout } from '../../Auth/auth-reducer'
import s from './Header.module.scss'


export const Header = () => {

    const dispatch = useAppDispatch()

    const handleClick = () => {
        sessionStorage.setItem('auth', JSON.stringify({ isAuth: false }))
        dispatch(Logout())
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