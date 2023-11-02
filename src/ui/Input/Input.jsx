import React from 'react'
import classes from './Input.module.css'

const Input = ({placeholder, onChange, width, value}) => {
    return (
        <input
            placeholder={placeholder}
            onChange={onChange}
            style={{width: width}}
            className={classes.input}
            value={value}
        />
    )
}

export default Input