import React from "react";
import s from "./Quote.module.css";

const Quote = () => { 
    return (
        <div className={s.container}>
            <h2 className={s.quote}>"У моєму словнику немає слова “неможливо”"</h2>
            <p className={s.author}>Author</p>
        </div> 
    )
}

export default Quote;