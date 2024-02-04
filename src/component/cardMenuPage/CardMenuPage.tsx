import {fetchCards} from "./card/CardApi";
import Navbar from "../../commonComponent/navbar/Navbar";
import CouvertureCard from "./couvertureCard/CouvertureCard";
import NavigationCardsMenus from "./navigationCardMenu/NavigationCardsMenus";
import {fetchMenus} from "./menu/MenuApi";
import React from "react";
import {renderCardsElements} from "./card/CardService";
import {ListCardMenuPdf} from "./listCardMenuPdf/ListCardMenuPdf";
import {renderMenusElements} from "./menu/MenuService";
import NewsletterReserve from "../homePage/newsletterReserve/NewsletterReserve";
import Footer from "../../commonComponent/footer/Footer";
import ScrollToTopButton from "../../commonComponent/scrollToTopOfPage/ScrollToTopButton";
import card_menu from "../../dataBrut/carte_menu.json";
import './cardMenuPage.css';

const CardMenuPage = () => {

    const [cards, setCards] = React.useState<any>([]);
    const [menus, setMenus] = React.useState<any>([]);

    React.useEffect(() => {
        if(process.env.REACT_APP_DATA_MODE === "static") {
            setCards(card_menu.cards);
            setMenus(card_menu.menus);
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
            <div className={process.env.REACT_APP_CARD_ONLY_PDF === "true" ? "mt-20" : "mt-12"}></div>
            {process.env.REACT_APP_CARD_ONLY_PDF === "false" && <NavigationCardsMenus />}
            <p className={"cardMenu-description"}>Notre cuisine est maison, élaborée à partir de produits de qualité.</p>
            {process.env.REACT_APP_CARD_ONLY_PDF === "true" && <ListCardMenuPdf />}
            {process.env.REACT_APP_CARD_ONLY_PDF === "false" &&
                <>
                    {renderCardsElements(cards)}
                    {renderMenusElements(menus)}
                </>
            }
            <NewsletterReserve />
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default CardMenuPage;
