import React, {createContext, PropsWithChildren, useState} from "react";

export const NavbarContext = createContext<any>(null);

export const NavbarConsumer = ({ children }: PropsWithChildren) => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <NavbarContext.Provider value={{ navbarOpen, setNavbarOpen }}>
            {children}
        </NavbarContext.Provider>
    );
}
