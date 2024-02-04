import React from 'react';

const InfoPractice = () => {

    // @ts-ignore
    const imagesDiapo = require.context('../../../assets/images', false, /infoPractice.*\.(png|jpe?g|svg|webp)$/);
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

        <section className="section-card text-white my-4 px-3 md:!px-8 flex flex-col md:flex-row-reverse gap-3 relative">

            <article className="bg-secondaire px-3 py-6 min-h-100px sm:min-h-150px rounded md:w-1/2">
                <h2 className="text-center text-xl pb-2 sm:text-3xl">Infos pratiques</h2>
                <hr className="w-40 m-auto"/>
                <div className="text-center py-3 px-4  lg:!px-10 text-white opacity-70">
                    <div className="flex justify-center flex-wrap items-center">
                        <p className="mr-3">Règlements par CB / Espèces</p>
                        <div className="flex items-center">
                            <i className="bi bi-credit-card text-xl mr-3"></i>
                            <i className="bi bi-cash text-2xl"></i>
                        </div>

                    </div>

                    <br/>
                    <p className="max-w-sm m-auto">Ticket resto uniquement le midi, du lundi au vendredi. La maison
                        n’accèpte pas les chèques.
                        <br/>
                        <br/>
                        Prix nets TTC - Service compris</p>
                </div>
            </article>


                    <article
                        className={"min-h-200px flex justify-center w-full md:w-1/2 rounded"}
                        style={backgroundImageStyle}>
                    </article>



        </section>
    );
};

export default InfoPractice;