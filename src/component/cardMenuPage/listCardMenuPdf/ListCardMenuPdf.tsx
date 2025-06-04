import React from 'react';
import imgCardCocktail from "../../../assets/images/diapo6.webp";
import imgCardRestaurant from "../../../assets/images/_X5A3430.webp";
import imgCardBoisson from "../../../assets/images/_X5A3307.webp";
import './listCardMenuPdf.css';

const MenuCard = ({ title, imagePath, pdfPath }: any) => {

    const handleClick = () => {
        window.open(pdfPath, '_blank');
    };

    return (
        <div className="menu-card mx-3 mt-4 mb-5 sm:!mb-3" onClick={handleClick}>
            <img src={imagePath} alt={title} />
            <div className="card-content">
                <h3 className={"font-bold p-2 uppercase"}>{title}</h3>
            </div>
        </div>
    );
};

export const ListCardMenuPdf = () => {
    const menuItems = [
        { title: 'Carte des Cocktails', imagePath: imgCardCocktail, pdfPath: '../../assets/pdf/carte_cocktail.pdf' },
        { title: 'Carte du Restaurant', imagePath: imgCardRestaurant, pdfPath: '../../assets/pdf/carte_le_bouddoir.pdf' },
        { title: 'Carte des Boissons / Alcools', imagePath: imgCardBoisson, pdfPath: '../../assets/pdf/la_carte_boisson.pdf' },
    ];

    return (
        <div className="menu-list md:!px-6 !mb-12">
            {menuItems.map((item, index) => (
                <MenuCard key={index} {...item} />
            ))}
        </div>
    );
};