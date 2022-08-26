import React from "react";
import s from "./Header.module.css";
import { ReactComponent as Svg } from '../images/svg/magnifier-search-zoom-svgrepo-com.svg';
import {ReactComponent as SvgBurger} from '../images/svg/hamburger-menu-more-svgrepo-com.svg';

const Header = () => { 
    return (
        <div className={s.container}>
            <button type="button" className={s.button}>
                <Svg/>
            </button>
            <button type="button" className={s.button}>
                <SvgBurger/>
            </button>
        </div> 
    )
}

export default Header;