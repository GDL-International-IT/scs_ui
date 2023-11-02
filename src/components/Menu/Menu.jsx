import React from 'react'
import classes from './Menu.module.css'
import LogoIcon from "../../assets/svg/LogoIcon"
import ProductIcon from "../../assets/svg/ProductIcon"
import PenIcon from "../../assets/svg/PenIcon"
import DocIcon from "../../assets/svg/DocIcon"
import ToolIcon from "../../assets/svg/ToolIcon"
import {useDispatch, useSelector} from "react-redux"
import {changeComponentAction, loginAction} from "../../store/reducer"
import Store from "../../store/store"
import SettingIcon from "../../assets/svg/SettingIcon"
import LogoutIcon from "../../assets/svg/LogoutIcon"

const Menu = () => {
    const dispatch = useDispatch()
    const changeComponent = (component) => dispatch(changeComponentAction(component))
    const logOut = () => dispatch(loginAction(false))




    return (
        <div className={classes.container}>
            <LogoIcon width={'7rem'} height={'1.75rem'}/>
            <div className={classes.menu}>
                <div className={classes.menuItem} onClick={() => changeComponent('products')}>
                    <ProductIcon width={'1.5rem'} height={'1.5rem'}/>
                    <span className={classes.menuLabel}>Products</span>
                </div>
                <div className={classes.menuItem} onClick={() => changeComponent('createCustom')}>
                    <PenIcon width={'1.5rem'} height={'1.5rem'}/>
                    <span className={classes.menuLabel}>Create Customs</span>
                </div>
                <div className={classes.menuItem} onClick={() => changeComponent('projects')}>
                    <DocIcon width={'1.5rem'} height={'1.5rem'}/>
                    <span className={classes.menuLabel}>Projects</span>
                </div>
                <div className={classes.menuItem} onClick={() => changeComponent('quickTool')}>
                    <ToolIcon width={'1.5rem'} height={'1.5rem'}/>
                    <span className={classes.menuLabel}>Quick Tool</span>
                </div>
            </div>
            <div className={classes.bottomSettings}>
                <div className={classes.menuItem}>
                    <SettingIcon width={'1.5rem'} height={'1.5rem'}/>
                    <span className={classes.menuLabel}>Setting</span>
                </div>
                <div className={classes.menuItem} onClick={() => logOut(false)}>
                    <LogoutIcon width={'1.5rem'} height={'1.5rem'}/>
                    <span className={classes.menuLabel}>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Menu