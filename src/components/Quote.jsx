import React from "react";
import s from "./Quote.module.css";

const Quote = () => { 
    return (
        <div className={s.container}>
            <h2 className={s.quote}>"Не роби мені нєрви, бо хапнеш:)"</h2>
            <p className={s.author}>Author</p>
        </div> 
    )
}

export default Quote;