import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Product from "../product/Product";
import Menu from "./Menu";

export const renderMenusElements = (menus: any) => {
    return menus.map((menu: any) => {

        return (
            <Menu key={menu.id} menuData={menu}/>
        )
    })
}

export function renderMenuProductsWithCategory(menuProducts: any[], menuData: { id: any; }, category: { category: { id: any; }; }) {
    return menuProducts
        .filter(
            (menuProduct) =>
                menuProduct.menuId === menuData.id &&
                menuProduct.categoryId === category.category.id
        )
        .map((menuProduct) => (
            <Product key={menuProduct.productId} productData={menuProduct} />
        ));
}


