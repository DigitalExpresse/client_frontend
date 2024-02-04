import React from 'react';
import textSection from "../../../dataBrut/textSection.json";
import restaurantInfo from "../../../dataBrut/restaurantInfo.json";
import {Link} from "react-router-dom";
import './cardSection.css';

const CardSection = () => {

    return (
            <section className="section-card w-full text-white my-3 px-3 md:!px-8 flex flex-col-reverse sm:flex-row-reverse gap-3 relative">

                <article className="menu-img rounded sm:w-1/2 min-h-300px !bg-cover object-cover flex justify-center w-full">

                    <Link to={'/carte'} className="px-3 py-1 text-lg m-auto text-center w-60 text-md border border-white relative bg-grayLight text-white transition ease-in-out rounded duration-200 hover:bg-primaire">Découvrir nos cartes</Link>

                </article>

                <article className="bg-primaire rounded p-6 sm:min-h-150px w-full sm:w-1/2">
                    <h2 className="text-center mb-3 text-xl md:text-3xl">{restaurantInfo.name}</h2>
                    <hr className="w-40 m-auto"/>
                    {/*    Une phrase d'accroche pour présenter les cartes*/}
                    <p className="section-card-text text-white opacity-70 text-center">
                        {textSection.cardTextFirst}
                        <br/>
                        <br/>
                        {textSection.cardTextSecond}
                    </p>
                </article>

            </section>
    );
};

export default CardSection;