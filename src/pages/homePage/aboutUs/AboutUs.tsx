import React from "react";
import menu2 from "./aboutUs2.webp";
import './aboutUs.css';
import textSection from "../../../dataBrut/textSection.json";

const AboutUs = () => {
    return (
        <section className="text-white p-3 md:!px-8 mt-16 flex flex-col relative sm:flex-row w-full">

            <div className="bg-primaire px-2 pb-6 sm:!px-4 min-h-100px w-full">
                <h2 className="text-center text-xl pt-8 sm:text-3xl">Notre établissement</h2>

                <hr className="w-40 mx-auto !my-4"/>

                <p className="px-4 pb-4 text-white opacity-70 md:pt-6 xl:pt-8 xl:!px-28 text-center">
                    {textSection.aboutUsEtablishmentTextFirstParagraph}
                    <br/>
                    <br/>
                    {textSection.aboutUsEtablishmentTextSecondParagraph}
                    <br/>
                    <br/>
                    {textSection.aboutUsEtablishmentTextThirdParagraph}
                </p>
            </div>

            <div className="w-full">
                <img alt="About us" src={menu2} className="h-full object-cover flex justify-center"/>
            </div>

        </section>
    );
};

export default AboutUs;

