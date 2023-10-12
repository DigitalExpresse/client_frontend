import React from 'react';
import textSection from "../../../dataBrut/textSection.json";
import restaurantInfo from "../../../dataBrut/restaurantInfo.json";
import {Link} from "react-router-dom";
import './card.css';


const Card = () => {

    return (
            <section className="section-card text-white my-3 px-3 md:!px-8 flex flex-col sm:flex-row-reverse relative">

                <article className="bg-primaire p-6 sm:min-h-150px sm:w-full">
                    <h2 className="text-center mb-3 text-xl md:text-3xl">{restaurantInfo.name}</h2>
                    <hr className="w-40 m-auto"/>
                {/*    Une phrase d'accroche pour présenter les cartes*/}
                    <p className="section-card-text text-white opacity-70 text-center">
                        {textSection.cardText}
                    </p>
                </article>

                <article className="menu-img min-h-250px !bg-cover object-cover flex justify-center">

                    <Link to={'/carte'} className="px-3 py-1 text-lg m-auto text-center w-60 text-md border border-white relative bg-grayLight text-white transition ease-in-out duration-200 hover:bg-primaire">Découvrir nos cartes</Link>

                </article>

            </section>
    );
};

export default Card;