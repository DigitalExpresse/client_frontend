import React from 'react';
import './card.css';
import textSection from "../../../dataBrut/textSection.json";
import restaurantInfo from "../../../dataBrut/restaurantInfo.json";

const Card = () => {

    return (
            <section className="section-card text-white p-3 md:!px-8 flex flex-col sm:flex-row-reverse relative">

                <article className="bg-primaire p-3 min-h-100px sm:min-h-150px sm:w-full">
                    <h2 className="text-center text-xl pt-8 pb-4 sm:text-3xl">{restaurantInfo.name}</h2>
                    <hr className="w-40 m-auto"/>
                {/*    Une phrase d'accroche pour présenter les cartes*/}
                    <p className="py-3 px-4 md:!pt-10  lg:!px-10 text-white opacity-70 text-center">
                        {textSection.cardText}
                    </p>
                </article>

                <article className="menu-img min-h-200px sm:min-h-300px !bg-cover object-cover flex justify-center">

                    <a href={'/carte'} className="px-3 py-1 text-lg m-auto text-center w-60 text-md border border-white relative bg-grayLight text-white transition ease-in-out duration-200 hover:bg-primaire">Découvrir nos cartes</a>

                </article>

            </section>
    );
};

export default Card;