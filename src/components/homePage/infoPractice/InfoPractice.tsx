import React from 'react';
import './infoPractice.css';

const InfoPractice = () => {
    return (

        <section className="section-card text-white my-4 px-3 md:!px-8 flex flex-col md:flex-row-reverse relative">

            <article className="bg-secondaire px-3 py-6 min-h-100px sm:min-h-150px md:w-1/2">
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

            <article className="infoPractice-img min-h-200px !bg-cover object-cover flex justify-center w-full md:w-1/2"></article>

        </section>
    );
};

export default InfoPractice;