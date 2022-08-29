import React from "react";
import s from "./Quotes.module.css";
import quotes from "../quotes.json";
import { Link, useLocation} from "react-router-dom";

const Quotes = () => { 
    const location = useLocation();

    const filtered = [...new Set(quotes.map(item => item.theme))];

    return (
        <>
            <ul className={ s.list}>
                {quotes && filtered.map(item => <li key={item} className={ s.item}>
                <Link to={`/quotes/${item}`} state={{from: location}} className={s.link }> {item}</Link>
                </li>)}
                </ul> 
        </>
    )
}

export default Quotes;