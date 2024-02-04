import React, {useEffect, useContext, useState} from 'react';
import './firstFormReservation.css';
import {getAvailableHours, handleDateChange, handleSelectChange} from "../ReservationService";
import {ReservationContext} from "../../../context/ReservationContext";
import restaurantInfo from "../../../dataBrut/restaurantInfo.json";

const AvailableHourButton = ({ date, setFormReservation }: any ) => {

    const {setSelectHoraire} = useContext(ReservationContext);

    return (
        <button
            className="bg-dark text-white p-2 w-14 text-xs rounded m-2 fadeIn"
            onClick={(e) => {
                e.preventDefault();
                setSelectHoraire(date);
                setFormReservation(2);
            }}
        >
            <b>{date.substring(11, 16)}</b>
        </button>
    )
}

const AvailableHoursSection = ({ availableHours, setFormReservation, setSelectHoraire }: any) => (
    <div className="px-2 py-6 rounded-bl-md !rounded-br-md bg-white">
        {
            availableHours.length > 0 ?

            availableHours.map((availableHour: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; dates: any[]; }, index: React.Key | null | undefined) => (
            <div key={index} className="flex-col justify-between w-100% p-1">
                <p className="m-2"><b>{availableHour.name} :</b></p>
                <div className="flex flex-wrap">
                    {availableHour.dates.map((date, index) => (
                        <AvailableHourButton
                            key={index}
                            date={date}
                            setFormReservation={setFormReservation}
                            setSelectHoraire={setSelectHoraire}
                        />
                    ))}
                </div>
            </div>
        ))

            : <p className="text-center text-lg p-6">Aucun horaire disponible pour cette date</p>

        }

    </div>
);

const FirstFormReservation = ({ setFormReservation }: any) => {
    const { selectedDate, setSelectedDate, numberOfPeople, setNumberOfPeople, dateRef } = useContext(ReservationContext);
    const [availableHours, setAvailableHours] = useState([]);

    useEffect(() => {
        getAvailableHours(selectedDate, numberOfPeople)
            .then((data) => setAvailableHours(data));
    }, [selectedDate, numberOfPeople]);

    return (
        <form className="w-full m-auto mt-4 overflow-y-scroll rounded-xl max-h-600px xl:max-h-700px">
            <div className="bg-primaire flex flex-col justify-between items-center w-full px-2 pt-2 pb-6 max-h-700px">
                <h2 className="text-center mt-3 mb-4 text-white text-lg">Le Bouddoir</h2>
                <p className="text-center text-white">Pour réserver c'est ici</p>
                <p className="text-center mb-2 text-white">Cela vous prendra moins d'une minute ! 🚀 </p>
                <p className="text-center text-white mb-3 max-w-sm">
                    Au delà de 10 couverts, veuillez nous contacter par téléphone au <b><a href={`tel:${restaurantInfo.telNumber}`}>{restaurantInfo.telNumber}</a></b>
                </p>
                <div className="flex flex-col md:flex-row">
                    <div className="relative m-1 fadeIn">
                        <select className="font-bold py-2 pl-10 pr-1 rounded border-white border-x-8 h-10 w-44"
                                value={numberOfPeople}
                                onChange={(e) => handleSelectChange(e, setNumberOfPeople)}
                        >
                            <option value="1">1 couvert</option>
                            <option value="2">2 couverts</option>
                            <option value="3">3 couverts</option>
                            <option value="4">4 couverts</option>
                            <option value="5">5 couverts</option>
                            <option value="6">6 couverts</option>
                            <option value="7">7 couverts</option>
                            <option value="8">8 couverts</option>
                            <option value="9">9 couverts</option>
                            <option value="10">10 couverts</option>
                        </select>
                        <i className="bi bi-people-fill absolute top-1/2 transform -translate-y-1/2 left-4"></i>
                    </div>

                    <div className="relative m-1 fadeIn">
                        <input
                            className="font-bold py-2 pl-10 rounded border-white border-x-8 h-10 w-44"
                            type="date"
                            name="date"
                            defaultValue={new Date().toISOString().substring(0, 10)}
                            min={new Date().toISOString().substring(0, 10)}
                            id="date"
                            ref={dateRef}
                            onChange={(e) => handleDateChange(dateRef, setSelectedDate)}
                        />
                        <i className="bi bi-calendar-week absolute top-1/2 transform -translate-y-1/2 left-4"></i>
                    </div>
                </div>
            </div>
            <AvailableHoursSection
                availableHours={availableHours}
                setFormReservation={setFormReservation}
                setSelectHoraire={setSelectedDate}
            />
        </form>
    );
};

export default FirstFormReservation;

