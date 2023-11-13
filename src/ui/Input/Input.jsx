import React from 'react'
import classes from './Input.module.css'

const Input = ({placeholder, onChange, value, style}) => {
    return (
        <input
            placeholder={placeholder}
            onChange={onChange}
            style={style}
            className={classes.input}
            value={value}
        />
    )
}

export default Input