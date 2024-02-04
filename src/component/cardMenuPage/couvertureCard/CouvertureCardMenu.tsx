import React from 'react';
import './couvertureCard.css';

const CouvertureCardMenu = () => {

    // @ts-ignore
    const imagesDiapo = require.context('../../../assets/images', false, /couvertureCardMenu.*\.(png|jpe?g|svg|webp)$/);
    const image = imagesDiapo.keys().map((image: any) => imagesDiapo(image))[0];

    let backgroundImageStyle = {};

    if (image !== undefined && image !== "") {
        backgroundImageStyle = {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        };
    }

    return (
        <article
            className="couvertureCard min-h-200px md:min-h-300px lg:min-h-400px flex justify-center items-center relative top-10 mx-3 md:!mx-8"
            style={backgroundImageStyle}
        >
                <h1 className="text-white z-0 text-2xl lg:text-5xl ">Carte & menus</h1>
        </article>
    );
};

export default CouvertureCardMenu;