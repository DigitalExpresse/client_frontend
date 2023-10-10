import Product from "./Product";
import React from "react";

export function renderProductsWithoutCategory(cardOrMenuProducts: any[], cardOrMenuData: { id: any; }) {
    return cardOrMenuProducts
        .filter((cardOrMenuProduct) => cardOrMenuProduct.cardId === cardOrMenuData.id)
        .map((cardOrMenuProduct) => (
            <Product key={cardOrMenuProduct.productId} productData={cardOrMenuProduct} />
        ));
}