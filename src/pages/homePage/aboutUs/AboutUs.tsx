import React from "react";
import img from '../../../assets/images/_X5A3467.webp'
import textSection from "../../../dataBrut/textSection.json";

const AboutUs = () => {
    return (
        <section className="text-white min-h-300px lg:max-h-350px mt-16 px-3 md:!px-8 flex flex-col relative sm:flex-row w-full">

            <div className="bg-primaire py-6 px-6 min-h-100px sm:w-1/2">
                <h2 className="text-center text-xl md:text-3xl mb-3">Notre restaurant</h2>
                <p className="about-section-body h-4/5 text-white opacity-70 xl:!px-28 text-center flex items-center">
                    {textSection.aboutUsEtablishmentTextFirstParagraph}
                    <br/>
                    <br/>
                    {textSection.aboutUsEtablishmentTextSecondParagraph}
                </p>
            </div>

            <div className="sm:w-1/2">
                <img alt="About us" src={img} className="h-full w-full object-cover flex justify-center"/>
            </div>

        </section>
    );
};

export default AboutUs;

