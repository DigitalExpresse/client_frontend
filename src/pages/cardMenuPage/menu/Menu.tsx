import React, {useEffect, useState} from "react";
import {renderCardProductsWithCategory} from "../card/CardService";
import {renderProductsWithoutCategory} from "../product/ProductService";
import api from "../../../dataBrut/api.json";
import {fetchCategoryByMenuId, fetchMenuProduct} from "./MenuApi";
import {renderMenuProductsWithCategory} from "./MenuService";

const Menu = ({menuData}: any) => {
    const [menuProducts, setMenuProducts] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);

    const hasCategories = categories.length > 0;
    const isFirstCategoryNull = hasCategories && categories[0].category === null;

    useEffect(() => {
        if (process.env.REACT_APP_DATA_MODE === "static") {
            setMenuProducts(api.menusProduct);
            setCategories(api.menus.filter((menu: any) => menu.id === menuData.id)[0].categories);
            return;
        } else {
            fetchMenuProduct().then((data) => setMenuProducts(data));
            fetchCategoryByMenuId(menuData.id).then((data) => setCategories(data));
            return;
        }

    }, [menuData, menuProducts.length, categories.length]);

    return (
        <div id={`${menuData.name}`} className="boxShadow">
            <section
                className="bg-bgGray rounded-md font-extrabold text-center flex flex-col justify-center pt-12 pb-8 px-4 md:!px-16 lg:!px-44 mx-3 my-4 md:!mx-8 !scroll-smooth">
                <h2 className="text-xl md:text-2xl mb-4 uppercase self-center">{menuData.name} {menuData.price}€</h2>
                <p className={"mb-8"}>{menuData.description}</p>
                {!hasCategories && !isFirstCategoryNull ? (
                    <p className={"text-xl"}>A venir ..</p>
                ) : (
                    hasCategories &&
                    !isFirstCategoryNull &&
                    categories.map((category: any) => (
                        <div key={category.category.id}>
                            <h3 className="text-xl text-tertiary md:self-start mb-4">{category.category.name}</h3>
                            <div>{renderMenuProductsWithCategory(menuProducts, menuData, category)}</div>
                        </div>
                    ))
                )}

                {hasCategories && isFirstCategoryNull && renderProductsWithoutCategory(menuProducts, menuData)}
            </section>
        </div>
    );
};

export default Menu;
