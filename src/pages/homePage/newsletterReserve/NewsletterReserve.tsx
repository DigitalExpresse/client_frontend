import React, {useContext} from 'react';
import {ReservationContext} from "../../../context/ReservationContext";
import LoaderBasic from "../../../components/loader/LoaderBasic";
import textSection from "../../../dataBrut/textSection.json";
import restaurantInfo from "../../../dataBrut/restaurantInfo.json";

const NewsletterReserve = () => {

    const [clickSubscribe, setClickSubscribe] : any= React.useState("S'inscrire");
    const subscribeToNewsletter = (e: any) => {
        e.preventDefault();
        if (e.target.previousSibling.value === "") {
            return;
        }

        setClickSubscribe(<LoaderBasic/>);

        setTimeout(() => {
            setClickSubscribe("Merci !");
        },2500);

        setTimeout(() => {
            setClickSubscribe("S'inscrire");
        }, 6000);
    }

    const { setModalReservationOpen } = useContext(ReservationContext);

    return (
        <section className="flex flex-col mx-3 md:!mx-8 text-white sm:flex-row">

            <article className="min-h-250px md:w-1/2 bg-secondaire p-6 md:px-16 xl:px-36">
                <h3 className="text-xl text-center pb-2 2xl:pb-6 md:text-3xl">{textSection.newsletterReserveTitle}</h3>
                <hr className="w-40 m-auto"/>
                <div className="flex flex-col mt-4">
                    <p className="text-center opacity-80 max-w-sm m-auto">{textSection.newsletterReserveText}</p>
                    { process.env.REACT_APP_DATA_MODE === 'static' ?
                        <a href={"tel:" + restaurantInfo.telNumber} className="text-center px-3 py-1 mt-4 sm:!mt-10 mx-auto w-60 text-md border border-white relative bg-secondaire uppercase">Reservez une table</a>
                        :
                        <button onClick={() => setModalReservationOpen(true)} className="px-3 py-1 mt-4 sm:!mt-10 mx-auto w-60 text-md border border-white relative bg-secondaire">Reserver une table</button>
                    }
                </div>
            </article>

            <article className="min-h-250px md:w-1/2 bg-primaire p-6 md:px-16 xl:px-36">
                <h3 className="text-xl text-center mb-3 2xl:pb-6 md:text-3xl">Newsletter</h3>
                <hr className="w-40 m-auto"/>

                <div className="flex flex-col max-w-sm mx-auto">
                    <p className="text-center opacity-80 mb-4">{textSection.newsletterText}</p>
                    <input className="px-3 py-1 mx-auto w-60 text-xs border border-white relative bg-primaire text-center" type="email" placeholder="Renseignez votre adresse email"/>
                    <button onClick={(e) => subscribeToNewsletter(e)} className={clickSubscribe === "Merci !" ? "px-3 py-1 mt-4 mx-auto w-60 text-md border border-white relative bg-tertiary" : "px-3 py-1 mt-4 mx-auto w-60 text-md border border-white relative bg-primaire"}>{clickSubscribe}</button>
                </div>

            </article>
        </section>
    );
};

export default NewsletterReserve;