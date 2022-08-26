import React, { useState } from "react";
import s from "./Header.module.css";
import { ReactComponent as Svg } from '../images/svg/ux-user-app-svgrepo-com.svg';
import { ReactComponent as SvgBurger } from '../images/svg/ux-basic-app-svgrepo-com.svg';




const Header = () => { 
    const [clicked, setClicked] = useState(false);
    

    return (
        <div className={s.container}>
            <button type="button" className={s.button} onClick={() => { setClicked(!clicked) }}>
                <SvgBurger/>
            </button>
            {clicked && <div id="myDropdown" className={s.dropdown}>
                <li className={s.item}>Мотиваційні</li>
                <li className={s.item}>Нудні</li>
                <li className={s.item}>Якась хєрня</li>
            </div>}
            <button type="button" className={s.button}>
                <Svg />
            </button>
        </div> 
    )
}

export default Header;