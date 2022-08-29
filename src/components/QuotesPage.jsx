import React from "react";
import s from "./QuotesPage.module.css";
import quotes from "../quotes.json";
import { useParams } from "react-router-dom";

const QuotesPage = () => { 
    const { theme } = useParams();

    const filteredByTheme = quotes.filter(quote => quote.theme === theme)
    return (
        <div>
        <ul>
                {quotes && filteredByTheme.map(quote => <li key={quote.id} className={ s.item}>
                    <h2 className={s.quote}>{quote.quote}</h2>
                    <p className={s.author}>{quote.author}</p>
                </li>)}
                </ul> 
        </div>
    )
}

export default QuotesPage;