import React, { CSSProperties } from 'react'
import s from './MainButton.module.scss'

type PropsType = {
    title: string
    type?: 'submit' | 'reset' | 'button' | undefined;
    handleClick?: () => void
    style?: CSSProperties
    disabled?: boolean
}

const MainButton: React.FC<PropsType> = (
    {
        title,
        type,
        handleClick,
        style,
        disabled,
    }
) => {
    return (
        <>
            <button type={type}
                className={s.mainButton}
                onClick={handleClick}
                style={style}
                disabled={disabled}
            >
                {title}
            </button>
        </>
    )
}

export default MainButton