import React from 'react'
import classes from './Button.module.css'

const Button = ({children, onClick, style}) => {
    return (
        <button
            className={classes.button}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    )
}

export default Button