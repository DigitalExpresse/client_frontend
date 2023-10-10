import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import CouvertureCard from "../homePage/couvertureCard/CouvertureCard";
import NavigationCardsMenus from "./navigationCardMenu/NavigationCardsMenus";
import Footer from "../../components/footer/Footer";
import NewsletterReserve from "../homePage/newsletterReserve/NewsletterReserve";
import './cardMenuPage.css';
import {fetchCards} from "./card/CardApi";
import {renderCardsElements} from "./card/CardService";
import api from "../../dataBrut/api.json";
import {renderMenusElements} from "./menu/MenuService";
import {fetchMenus} from "./menu/MenuApi";
import ScrollToTop from "../../components/ScrollToTop";

const CardMenuPage = () => {

    const [cards, setCards] = React.useState<any>([]);
    const [menus, setMenus] = React.useState<any>([]);

    React.useEffect(() => {
        if(process.env.REACT_APP_DATA_MODE === "static") {
            setCards(api.cards);
            setMenus(api.menus);
        }
        else {
            fetchCards().then((data) => setCards(data));
            fetchMenus().then((data) => setMenus(data));
        }
    }, [])


    return (
        <>
            <Navbar />
            <CouvertureCard />
            <NavigationCardsMenus />
            {renderCardsElements(cards)}
            {renderMenusElements(menus)}
            <NewsletterReserve />
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default CardMenuPage;
