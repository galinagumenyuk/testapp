import React from "react";
import s from "./Header.module.css";
import { ReactComponent as Svg } from '../images/svg/ux-user-app-svgrepo-com.svg';
import {ReactComponent as SvgBurger} from '../images/svg/ux-basic-app-svgrepo-com.svg';

const Header = () => { 
    return (
        <div className={s.container}>
            <button type="button" className={s.button}>
                <SvgBurger/>
            </button>
            <button type="button" className={s.button}>
                <Svg />
            </button>
        </div> 
    )
}

export default Header;