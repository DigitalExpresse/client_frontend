import React from 'react';
import textSection from "../../../dataBrut/textSection.json";
import img from "../../../assets/images/_X5A3444.webp";

const Tapas = () => {
    return (
        <section className="text-white min-h-300px lg:max-h-350px mt-3 px-3 md:!px-8 flex flex-col-reverse relative sm:flex-row w-full">

            <div className="sm:w-1/2">
                <img alt="About us" src={img} className="h-full w-full object-cover flex justify-center"/>
            </div>

            <div className="bg-primaire py-6 px-6 min-h-100px sm:w-1/2">
                <h2 className="text-center text-xl md:text-3xl mb-3">{textSection.tapasTitle}</h2>
                <p className="about-section-body h-4/5 text-white opacity-70 xl:!px-28 text-center flex items-center">
                    {textSection.tapasTextFirstPar}
                    <br/>
                    <br/>
                    {textSection.tapasSecondPar}
                </p>
            </div>

        </section>
    );
};

export default Tapas;