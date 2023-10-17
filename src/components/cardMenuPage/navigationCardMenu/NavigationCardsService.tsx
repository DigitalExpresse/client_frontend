import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const renderCardsAndMenuTitleForNavigation = (cards: any, active: any, setActive: any) => {
    return cards.map((card: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }) => (
        active === card.id ?

            <AnchorLink  onClick={() => setActive(card.id)} offset={100} href={'#' + card.name} className="text-tertiary font-extrabold text-center relative mx-2" key={card.id}>{card.name}</AnchorLink>

            :

            <AnchorLink onClick={() => setActive(card.id)} offset={100} href={'#' + card.name} className="font-extrabold text-center mx-2 relative" key={card.id}>{card.name}</AnchorLink>
    ))
}