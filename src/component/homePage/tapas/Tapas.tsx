import React from 'react';
import textSection from "../../../dataBrut/text.json";

const Tapas = () => {

    // @ts-ignore
    const imagesDiapo = require.context('../../../assets/images', false, /aboutUs2.*\.(png|jpe?g|svg|webp)$/);
    const image = imagesDiapo.keys().map((image: any) => imagesDiapo(image))[0];

    return (
        <section className="text-white min-h-300px lg:max-h-350px mt-3 px-3 md:!px-8 flex flex-col-reverse relative gap-3 sm:flex-row w-full">

            <div className="sm:w-1/2">
                <img alt="About us" src={image} className="h-full w-full object-cover flex justify-center rounded"/>
            </div>

            <div className="bg-primaire py-6 px-6 min-h-100px sm:w-1/2 rounded">
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