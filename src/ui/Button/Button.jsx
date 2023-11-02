import React from 'react'
import classes from './Button.module.css'

const Button = ({children, onClick, width, padding, fontSize}) => {
    return (
        <button
            className={classes.button}
            onClick={onClick}
            style={{width: width, padding: padding, fontSize: fontSize}}
        >
            {children}
        </button>
    )
}

export default Button