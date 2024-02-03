import React, {useEffect, useState} from "react";
import {renderCardProductsWithCategory} from "./CardService";
import {renderProductsWithoutCategory} from "../product/ProductService";
import {fetchCardProduct, fetchCategoryByCardId} from "./CardApi";
import api from "../../../dataBrut/carte_menu.json";
import "./card.css";

const Card = ({cardData}: any) => {
    const [cardProducts, setCardProducts] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);

    const hasCategories = categories.length > 0;
    const isFirstCategoryNull = hasCategories && categories[0].category === null;

    useEffect(() => {
        if (process.env.REACT_APP_DATA_MODE === "static") {
            setCardProducts(api.cardsProduct);
            setCategories(api.cards.filter((card: any) => card.id === cardData.id)[0].categories);
            return;
        } else {
            fetchCardProduct().then((data) => setCardProducts(data));
            fetchCategoryByCardId(cardData.id).then((data) => setCategories(data));
            return;
        }
    }, [cardData.id]);

    return (
        <div id={`${cardData.name}`} className="boxShadow">
            <section
                className="bg-bgGray rounded-md font-extrabold text-center flex flex-col justify-center pt-12 pb-8 px-4 md:!px-16 lg:!px-44 mx-3 my-4 md:!mx-8 !scroll-smooth">
                <h2 className="text-xl md:text-2xl mb-4 md:!mb-10 uppercase self-center">{cardData.name}</h2>
                <p className="card-description">{cardData.description}</p>
                {!hasCategories && !isFirstCategoryNull ? (
                    <p className={"text-xl"}>A venir ..</p>
                ) : (
                    hasCategories &&
                    !isFirstCategoryNull &&
                    categories.map((category: any) => (
                        <div key={category.category.id}>
                            <h3 className="text-xl text-tertiary md:self-start mb-4">{category.category.name}</h3>
                            <div>{renderCardProductsWithCategory(cardProducts, cardData, category)}</div>
                        </div>
                    ))
                )}

                {hasCategories && isFirstCategoryNull && renderProductsWithoutCategory(cardProducts, cardData)}
            </section>
        </div>
    );
};

export default Card;
