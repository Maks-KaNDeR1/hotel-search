import { Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import s from './RequestParameters.module.scss'
import MainButton from '../../../common/MainButton/MainButton'
import { useAppDispatch } from '../../../utils/hook'
import { todaysLat } from '../../../common/date/date'
import { requestHotels } from '../../../store-reducers/hotels-sagas'

export const RequestParameters = () => {

    const dispatch = useAppDispatch()

    const validationsSchema = yup.object().shape({
        local: yup.string().required('Обязательно'),
        date: yup.string().required('Обязательно'),
        numberDays: yup.string().required('Обязательно'),
    })

    type SubmitHandlerType = {
        local: string
        date: string
        numberDays: number
    }

    const submitHandler = (values: SubmitHandlerType) => {
        dispatch(requestHotels(values.local, values.date, values.numberDays))
    }

    return (
        <div className={s.loginBlock}>
            <Formik
                initialValues={{
                    local: 'Москва',
                    date: todaysLat,
                    numberDays: 1,
                }}
                onSubmit={submitHandler}
                validationSchema={validationsSchema}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
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
                        {touched.local && errors.local && <p className={s.error}>{errors.local}</p>}

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
                        {touched.date && errors.date && <p className={s.error}>{errors.date}</p>}

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
                        {touched.numberDays && errors.numberDays && <p className={s.error}>{errors.numberDays}</p>}

                        <div className={s.button}>
                            <MainButton
                                title='Найти'
                                type='submit'
                                style={{ color: '#fff', fontSize: '18px', width: '296px' }}
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}


