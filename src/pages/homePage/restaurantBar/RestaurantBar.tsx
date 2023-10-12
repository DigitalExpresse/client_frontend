import React from 'react';
import textSection from "../../../dataBrut/textSection.json";
import menu2 from "../aboutUs/aboutUs2.webp";

const RestaurantBar = () => {
    return (
        <section className="text-white min-h-300px lg:max-h-300px mt-3 px-3 md:!px-8 flex flex-col-reverse relative sm:flex-row w-full">

            <div className="sm:w-1/2">
                <img alt="About us" src={menu2} className="h-full w-full object-cover flex justify-center"/>
            </div>

            <div className="bg-primaire py-6 px-6 min-h-100px sm:w-1/2">
                <h2 className="text-center text-xl md:text-3xl mb-3">Le coin tapas</h2>
                <p className="about-section-body text-white opacity-70 xl:!px-28 text-center flex items-center">
                    {textSection.aboutUsEtablishmentTextSecondParagraph}
                    <br/>
                    <br/>
                    {textSection.aboutUsEtablishmentTextFirstParagraph}
                </p>
            </div>

        </section>
    );
};

export default RestaurantBar;