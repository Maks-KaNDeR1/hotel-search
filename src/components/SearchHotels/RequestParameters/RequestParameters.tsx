import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import s from './RequestParameters.module.scss'
import MainButton from '../../../common/MainButton/MainButton'
import { useAppDispatch } from '../../../utils/hook'
import { requestHotels } from '../Main/hotels-reducer'

export const RequestParameters = () => {


    const dispatch = useAppDispatch()

    let checkOut = '2022-10-12'

    type SubmitHandlerType = {
        local: string
        date: string
        numberDays: string
    }

    const submitHandler = (values: SubmitHandlerType) => {
        console.log(values)
        // dispatch(requestHotels(values.local, values.date, values.numberDays))
        dispatch(requestHotels(values.local, values.date, checkOut))

    }

    return (
        <div className={s.loginBlock}>
            <Formik
                initialValues={{
                    local: '',
                    date: '',
                    numberDays: '',
                }}
                onSubmit={submitHandler}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={s.form}>

                        <p>
                            <label className={s.label} htmlFor={`local`}>  Локация</label><br />
                            <input
                                className={s.inputField}
                                type={`text`}
                                name={`local`}
                                onChange={handleChange}
                                value={values.local}
                            />
                        </p>
                        <p>
                            <label className={s.label} htmlFor={`date`}>Дата заселения</label><br />
                            <input
                                className={s.inputField}
                                type={'date'}
                                name={`date`}
                                onChange={handleChange}
                                value={values.date}
                            />
                        </p>
                        <p>
                            <label className={s.label} htmlFor={`numberDays`}>Количество дней</label><br />
                            <input
                                className={s.inputField}
                                type={'number'}
                                name={`numberDays`}
                                onChange={handleChange}
                                value={values.numberDays}
                            />
                        </p>

                        <div className={s.button}>

                            <MainButton
                                title='Найти'
                                style={{ color: '#fff', fontSize: '18px', width: '296px' }}
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}


