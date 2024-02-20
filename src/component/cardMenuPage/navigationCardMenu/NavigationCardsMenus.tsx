import React from 'react';
import './navigationCardMenu.css'
import api from "../../../dataBrut/carte_menu.json";
import {fetchCards} from "../card/CardApi";
import {fetchMenus} from "../menu/MenuApi";
import {renderCardsAndMenuTitleForNavigation} from "./NavigationCardsService";
import settingWebsite from "../../../dataBrut/settingWebsite.json";
const NavigationCardsMenus = () => {

    const [cardsAndMenus, setCardsAndMenus] = React.useState<any>([]);
    const [active, setActive] = React.useState<any>(0);

    React.useEffect(() => {

        if (settingWebsite.dataMode === "static") setCardsAndMenus(Array.prototype.concat(api.cards, api.menus))
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
            <div className={'menu-name-nav-div flex xl:justify-center bg-white whitespace-nowrap w-11/12 mx-auto overflow-x-auto uppercase text-md pt-4 pb-3 hover:overflow-x-auto'}>
                {renderCardsAndMenuTitleForNavigation(cardsAndMenus, active, setActive)}
            </div>
        </div>

    );
};

export default NavigationCardsMenus;