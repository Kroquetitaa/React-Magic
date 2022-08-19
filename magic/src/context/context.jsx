import { createContext, useEffect, useState } from "react";

export const MagicCardsContext = createContext();

export const MagicCardsContextProvider = ( { children }) => {

    const URL = 'https://api.magicthegathering.io/v1/cards';

    const [ cards, setCards ] = useState([]);

    const peticion = async( ) => {
        const api = await fetch(`${URL}`);
        const data = await api.json();
        const allCards = data.cards;
        setCards( allCards );
    }

    useEffect( () => {
        peticion();
    }, []);

    return (
        <MagicCardsContext.Provider value={ { cards }}>
            { children }
        </MagicCardsContext.Provider>
    )

}