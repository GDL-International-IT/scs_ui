import React from 'react'
import styles from './Button.module.css'

const Button = ({children, onClick, style}) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    )
}

export default Button