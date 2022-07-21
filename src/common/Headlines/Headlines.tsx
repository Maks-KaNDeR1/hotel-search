import React from 'react'
import styles from './Headlines.module.scss'

type PropsType = {
    Headlock?: string
}

const Headlines: React.FC<PropsType> = ({ Headlock }) => {
    return (
        <div>
            <div className={styles.Headlock}> Simple Hotel Check</div>
        </div>
    )
}

export default Headlines