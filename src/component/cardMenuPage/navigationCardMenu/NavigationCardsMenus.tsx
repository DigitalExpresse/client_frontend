import React from 'react';
import './navigationCardMenu.css'
import api from "../../../dataBrut/carte_menu.json";
import {fetchCards} from "../card/CardApi";
import {fetchMenus} from "../menu/MenuApi";
import {renderCardsAndMenuTitleForNavigation} from "./NavigationCardsService";
const NavigationCardsMenus = () => {

    const [cardsAndMenus, setCardsAndMenus] = React.useState<any>([]);
    const [active, setActive] = React.useState<any>(0);

    React.useEffect(() => {

        if (process.env.REACT_APP_DATA_MODE === "static") setCardsAndMenus(Array.prototype.concat(api.cards, api.menus))
        else {
            fetchCards().then((res) => {
                fetchMenus().then((res2) => {
                    setCardsAndMenus(Array.prototype.concat(res, res2))
                })
            })
        }

    }, [cardsAndMenus.length, active])

    return (

        <div className="menu-nav">
            <div className={'menu-name-nav-div flex 2xl:justify-center bg-white whitespace-nowrap w-11/12 mx-auto overflow-x-auto uppercase text-md pt-4 pb-3 hover:overflow-x-auto'}>
                {renderCardsAndMenuTitleForNavigation(cardsAndMenus, active, setActive)}
                {process.env.REACT_APP_DATA_MODE === "static" && <a href={process.env.REACT_APP_DOMAIN + "/assets/pdf/carte_le_bouddoir.pdf"} target="_blank" rel="noreferrer" className="font-bold mx-2">Carte du restaurant</a>}
                {process.env.REACT_APP_DATA_MODE === "static" && <a href={process.env.REACT_APP_DOMAIN + "/assets/pdf/carte_la_bodeguita.pdf"} target="_blank" rel="noreferrer" className="font-bold mx-2">Carte la Bodeguita</a>}
                {process.env.REACT_APP_DATA_MODE === "static" && <a href={process.env.REACT_APP_DOMAIN + "/assets/pdf/la_carte_boisson.pdf"} target="_blank" rel="noreferrer" className="font-bold mx-2">Boissons / Alcools</a>}
            </div>
        </div>

    );
};

export default NavigationCardsMenus;