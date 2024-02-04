import React, {useEffect} from 'react';
import restaurantInfo from "../../../dataBrut/restaurantInfo.json";
import {renderHoraires} from "./HoraireContactService";
import openningHours from "../../../dataBrut/openningHours.json";

const HoraireContact = () => {

    const [horaires, setHoraires]: any[] = React.useState([]);

    useEffect(() => {
        setHoraires(openningHours.openingHours);
        // fetchOpeningHours().then(data => {
        //     setHoraires();
        //     console.log(horaires)
        // });
    }, []);

    return (
        <section className="flex flex-col sm:flex-row px-3 gap-3 md:!px-8">
            <article className="bg-secondaire min-h-150px items-center p-6 w-full sm:!mx-0 sm:w-1/2 md:!mr-0 rounded">
                <h2 className="text-white text-xl md:text-3xl mb-3 text-center">Horaires</h2>
                <div className="h-4/6 items-center flex flex-col justify-center gap-4">
                    {renderHoraires(horaires)}
                </div>

            </article>

            <article className="bg-primaire text-white p-6 text-center w-full sm:!mx-0 sm:w-1/2 md:!ml-0 rounded">
                <h2 className="text-xl md:text-3xl text-center">Accès / Contact</h2>

                <div className="mt-4 flex flex-col justify-center items-center">
                    <a href={restaurantInfo.googleMapsUrl}
                       rel={"noreferrer"} target={"_blank"}
                       className="block opacity-80 mb-2 underline">{restaurantInfo.adresse}
                    </a>
                    <div className="my-3 hover:underline">
                        <i className="bi bi-geo-alt text-md mx-2"></i>
                        <a rel={"noreferrer"} target={"_blank"} href={restaurantInfo.googleMapsUrl}
                           className={"mx-auto opacity-80"}>Google Maps</a>
                    </div>
                    <div>
                        <i className="bi bi-telephone-fill opacity-80 text-md mx-2"></i>
                        <a href={"tel:" + restaurantInfo.telNumber}
                           className="opacity-80">{restaurantInfo.telNumber}</a>
                    </div>
                    <div className="flex justify-center ml-3 mt-3">
                        <a rel={"noreferrer"} target={"_blank"} className={"instagram-logo"} href={String(restaurantInfo.socialNetworks[0].url)}>
                            <i className="bi bi-instagram text-2xl mx-2"></i>
                        </a>
                        <a rel={"noreferrer"} target={"_blank"} className={"'facebook-logo"} href={String(restaurantInfo.socialNetworks[1].url)}>
                            <i className="bi bi-facebook text-2xl mx-2"></i>
                        </a>
                    </div>

                </div>
            </article>
        </section>
    );
};

export default HoraireContact;
