import React from "react";
import s from "./Home.module.css";

const Home = () => { 
    return (
        <div className={s.container}>
            <h2 className={s.quote}>У моєму словнику немає слова “неможливо”</h2>
            <p className={s.author}>Author</p>
        </div> 
    )
}

export default Home;