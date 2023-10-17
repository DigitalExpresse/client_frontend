import React from "react";
import Product from "../product/Product";
import Card from "./Card";

export const renderCardsElements = (cards: any) => {
    return cards.map((card: any) => {

        return (
            <Card key={card.id} cardData={card} />
        )
    })
}

export function renderCardProductsWithCategory(cardProducts: any[], cardData: { id: any; }, category: { category: { id: any; }; }) {
    return cardProducts
        .filter(
            (cardProduct) =>
                cardProduct.cardId === cardData.id &&
                cardProduct.categoryId === category.category.id
        )
        .map((cardProduct) => (
            <Product key={cardProduct.productId} productData={cardProduct} />
        ));
}


