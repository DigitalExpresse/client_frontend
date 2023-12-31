import React, {useContext} from 'react';
import {ReservationContext} from "../../../context/ReservationContext";
import './couverture.css';
import restaurantInfo from "../../../dataBrut/restaurantInfo.json";
import textSection from "../../../dataBrut/textSection.json";

const Couverture = () => {

    const { setModalReservationOpen } = useContext(ReservationContext);

    return (
        <section className="background-couverture relative top-12 mx-3 md:!mx-8 font-extrabold" id="home">

            <div className="text-white flex flex-col items-center relative top-1/3 text-center justify-center m-auto w-11/12 md:items-start md:justify-start md:m-0 ">
                <h1 className="text-4xl md:text-5xl lg:text-7xl mb-12">{restaurantInfo.name}</h1>
                <h2 className="text-xl mb-2 md:text-3xl lg:text-4xl">{restaurantInfo.ville}</h2>
                <h3 className="md:text-xl opacity-80 lg:text-2xl">{textSection.descriptionCouverture}</h3>
                { process.env.REACT_APP_DATA_MODE === 'static' ?
                    <a href={"tel:" + restaurantInfo.telNumber} className="button-couverture uppercase relative text-lg w-full border-2 px-2 py-1 mt-4 bg-grayLight md:w-52 lg:text-xl transition ease-in-out duration-200 hover:bg-primaire">Reservez</a>
                        :
                    <button onClick={() => setModalReservationOpen(true)} className="relative text-lg w-full max-w-xs border-2 px-2 py-1 mt-4 bg-grayLight md:w-52 lg:text-xl transition ease-in-out duration-200 hover:bg-primaire">Reservez</button>
                }
            </div>

        </section>
    );
};

export default Couverture;