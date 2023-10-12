import React, {useEffect} from 'react';
import restaurantInfo from "../../../dataBrut/restaurantInfo.json";
import {renderHoraires} from "./HoraireContactService";
import api from "../../../dataBrut/api.json";

const HoraireContact = () => {

    const [horaires, setHoraires]: any[] = React.useState([]);

    useEffect(() => {
        setHoraires(api.openingHours);
        // fetchOpeningHours().then(data => {
        //     setHoraires();
        //     console.log(horaires)
        // });
    }, []);

    return (
        <section id="horaires" className="flex flex-col md:flex-row my-3">
            <div className="bg-primaire mx-3 md:!mx-8 min-h-150px flex flex-col items-center p-3 md:w-full md:!mr-0">
                <h2 className="text-white text-xl md:text-3xl text-center">Horaires</h2>
                <hr className="w-40 text-white"/>
                {renderHoraires(horaires)}
            </div>

            <article className="bg-secondaire text-white mx-3 md:!mx-8 p-6 text-center md:w-full md:!ml-0">
                <h2 className="text-xl md:text-3xl text-center">Accès / Contact</h2>
                <hr className="w-40 text-white"/>

                <div className="md:mt-6">
                    <a href={restaurantInfo.googleMapsUrl}
                       rel={"noreferrer"} target={"_blank"}
                       className="block opacity-80 mb-2 underline">{restaurantInfo.adresse}
                    </a>
                    <a rel={"noreferrer"} target={"_blank"} href={restaurantInfo.googleMapsUrl}
                       className={"block border max-w-xxs p-2 mx-auto mt-4 mb-4"}>Google Maps</a>
                    <div>
                        <i className="bi bi-telephone-fill opacity-80 text-md mx-2"></i>
                        <a href={"tel:" + restaurantInfo.telNumber}
                           className="opacity-80">{restaurantInfo.telNumber}</a>
                    </div>
                    <div className="flex justify-center mt-3">
                        <a className={"instagram-logo"} href={String(restaurantInfo.socialNetworks[0].url)}>
                            <i className="bi bi-instagram text-2xl mx-2"></i>
                        </a>
                        <a className={"'facebook-logo"} href={String(restaurantInfo.socialNetworks[1].url)}>
                            <i className="bi bi-facebook text-2xl mx-2"></i>
                        </a>
                    </div>

                </div>
            </article>
        </section>
    );
};

export default HoraireContact;
