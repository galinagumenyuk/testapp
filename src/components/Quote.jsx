import React from "react";
import s from "./Quote.module.css";

const Quote = () => { 
    return (
        <div className={s.container}>
            <h2 className={s.quote}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit quos labore consequatur suscipit!"</h2>
            <p className={s.author}>Author</p>
        </div> 
    )
}

export default Quote;