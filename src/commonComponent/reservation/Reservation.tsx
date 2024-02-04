import React, {useContext, useState} from 'react';
import FirstFormReservation from "./firstFormReservation/FirstFormReservation";
import SecondFormReservation from "./secondFormReservation/SecondFormReservation";
import './reservation.css';
import {ReservationContext} from "../../context/ReservationContext";

const Reservation = () => {
    const {modalReservationOpen, setModalReservationOpen, setAlertSuccessForm} = useContext(ReservationContext);
    const [formReservation, setFormReservation] = useState<number>(1);

    const closeModal = () => {
        setModalReservationOpen(false);
        setAlertSuccessForm(false);
    };

    return (
        <section>
            {modalReservationOpen && (
                <div className="overlay" onClick={closeModal}></div>
            )}
            <div className={modalReservationOpen ? "block centered-axis-xy max-w-md z-50 rounded-xl" : "hidden"}>
                <button className="close-button" onClick={closeModal}>&times;</button>
                {
                    formReservation === 1 ?
                        <div className="form-container">
                            <FirstFormReservation setFormReservation={setFormReservation}/>
                        </div>
                        :
                        <div className="form-container">
                            <SecondFormReservation setFormReservation={setFormReservation}/>
                        </div>
                }
            </div>
        </section>
    );
};

export default Reservation;
