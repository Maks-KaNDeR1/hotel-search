import React, { useState } from 'react'
import { Formik } from "formik";
import * as yup from 'yup'
import s from './Login.module.scss';
import { Navigate, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../utils/hook';
import { login } from '../auth-reducer';
import Headlines from '../../../common/Headlines/Headlines';
import MainButton from '../../../common/MainButton/MainButton';


export const Login = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const dispatch = useAppDispatch()

    const [eye, setEye] = useState(true)
    const handleClick = () => {
        if (eye) {
            setEye(false)
        } else {
            setEye(true)
        }
    }

    const validationsSchema = yup.object().shape({
        email: yup.string().email('Введите верный email').required('Обязательно'),
        password: yup.string().min(8, 'Не менее 8 символов').required('Обязательно'),
    })

    type SubmitHandlerType = {
        email: string
        password: string
    }

    const submitHandler = (values: SubmitHandlerType) => {

        // let data = { 
        //     values.email, 
        //     values.password, 
        //     isAuth }
        const isAuth = true
        dispatch(login(values.email, values.password, isAuth))
        sessionStorage.setItem('auth', JSON.stringify({ isAuth: isAuth }))
        // dispatch(setAuthUserData(data))
    }

    if (isAuth) {
        return <Navigate to={'/search-for-hotels'} />
    }

    return (
        <div className={s.loginBlock}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validateOnBlur
                onSubmit={submitHandler}
                validationSchema={validationsSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <form onSubmit={handleSubmit} className={s.form}>

                        <h1 className={s.title}>Simple Hotel Check </h1>

                        <p>
                            <label className={s.label} htmlFor={`email`}>  Логин</label><br />
                            <input
                                className={s.inputField}
                                type={`email`}
                                name={`email`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </p>
                        {touched.email && errors.email && <p className={s.error}>{errors.email}</p>}

                        <p>
                            <label className={s.label} htmlFor={`secondName`}>Пароль</label><br />
                            <input
                                className={s.inputField}
                                type={eye ? `text` : 'password'}
                                name={`password`}
                                onChange={handleChange}

                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <span className={s.eye} onClick={handleClick}>
                                {
                                    eye ? <i className="fa fa-eye" />
                                        : <i className="fa fa-eye-slash" />
                                }
                            </span>
                        </p>
                        {touched.password && errors.password && <p className={s.error}>{errors.password}</p>}

                        <div className={s.button}>

                            <MainButton
                                title='Войти'
                                style={{ color: '#fff', fontSize: '18px' }}
                            />
                        </div>
                        <div className={s.background} ></div>
                    </form>
                )}
            </Formik>
        </div>
    )
}
