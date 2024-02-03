import React from 'react';
import Navbar from "../../components/commonComponent/navbar/Navbar";
import CouvertureCard from "../../components/homePage/couvertureCard/CouvertureCard";
import NavigationCardsMenus from "../../components/cardMenuPage/navigationCardMenu/NavigationCardsMenus";
import Footer from "../../components/commonComponent/footer/Footer";
import NewsletterReserve from "../../components/homePage/newsletterReserve/NewsletterReserve";
import ScrollToTopButton from "../../components/commonComponent/ScrollToTopButton";
import {fetchCards} from "../../components/cardMenuPage/card/CardApi";
import {renderCardsElements} from "../../components/cardMenuPage/card/CardService";
import {renderMenusElements} from "../../components/cardMenuPage/menu/MenuService";
import {fetchMenus} from "../../components/cardMenuPage/menu/MenuApi";
import {ListCardMenuPdf} from "../../components/cardMenuPage/listCardMenuPdf/ListCardMenuPdf";
import api from "../../dataBrut/carte_menu.json";
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
