import React from "react";
import s from "./Navigate.module.css";
import { ReactComponent as Svg } from '../images/svg/ux-user-app-svgrepo-com.svg';
import { ReactComponent as SvgBurger } from '../images/svg/ux-basic-app-svgrepo-com.svg';

import { NavLink } from "react-router-dom";




const Navigate = () => { 

    return (
        <nav className={s.container}>
        <NavLink to='/' className={navData => navData.isActive ? s.active : s.link} > HOME</NavLink>
        <NavLink to='/quotes' className={navData => navData.isActive ? s.active : s.link} > <SvgBurger/></NavLink>
        <NavLink to='/profile' className={ navData => navData.isActive ? s.active : s.link } > <Svg /></NavLink>
    </nav>
    )
}

export default Navigate;