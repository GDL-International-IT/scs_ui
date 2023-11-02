import React from 'react'
import LogoIcon from "../../assets/svg/LogoIcon"
import Input from "../../ui/Input/Input"
import useInput from "../../hooks/useInput"
import classes from './LoginPage.module.css'
import Button from "../../ui/Button/Button"
import RightArrowIcon from "../../assets/svg/RightArrowIcon"
import {useDispatch} from "react-redux"
import {loginAction} from "../../store/reducer"

const LoginPage = () => {
    const loginInput = useInput('', 'LoginPage')
    const passwordInput = useInput('', 'Password')
    const dispatch = useDispatch()

    const login = () => dispatch(loginAction(true))


    return (
        <div className={classes.container}>
            <LogoIcon width={'15.625rem'} height={'3.75rem'}/>
            <div className={classes.inputsContainer}>
                <Input
                    width={'25rem'}
                    placeholder={loginInput.placeholder}
                    onChange={loginInput.onChange}
                    value={loginInput.value}
                />
                <Input
                    width={'25rem'}
                    placeholder={passwordInput.placeholder}
                    onChange={passwordInput.onChange}
                    value={passwordInput.value}
                />
            </div>
            <Button
                width={'17.9375rem'}
                onClick={login}
                padding={'.88rem 0'}
                fontSize={'1.125rem'}
            >
                <div className={classes.buttonContent}>
                    <span>LOGIN</span>
                    <RightArrowIcon width={'1.125rem'} height={'1.125rem'}/>
                </div>

            </Button>

        </div>
    )
}

export default LoginPage