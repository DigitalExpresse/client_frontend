import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import CouvertureCard from "../homePage/couvertureCard/CouvertureCard";
import NavigationCardsMenus from "./navigationCardMenu/NavigationCardsMenus";
import Footer from "../../components/footer/Footer";
import NewsletterReserve from "../homePage/newsletterReserve/NewsletterReserve";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import {fetchCards} from "./card/CardApi";
import {renderCardsElements} from "./card/CardService";
import {renderMenusElements} from "./menu/MenuService";
import {fetchMenus} from "./menu/MenuApi";
import api from "../../dataBrut/api.json";
import './cardMenuPage.css';


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
            <p className={"cardMenu-description"}>Notre cuisine est maison, élaborée à partir de produits de qualité.</p>
            {renderCardsElements(cards)}
            {renderMenusElements(menus)}
            <NewsletterReserve />
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default CardMenuPage;
