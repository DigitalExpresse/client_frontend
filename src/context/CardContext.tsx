import React, {createContext, PropsWithChildren, useState} from "react";

export const CardContext = createContext<any>(null);

export const CardConsumer = ({ children }: PropsWithChildren) => {

    const [cards, setCards]: any = useState([]);

    return (
        <CardContext.Provider value={{cards, setCards}}>
            {children}
        </CardContext.Provider>
    );
}