import React, {createContext, PropsWithChildren, useRef, useState} from "react";

export const ReservationContext = createContext<any>(null);

export const ReservationConsumer = ({ children }: PropsWithChildren) => {

    const [modalReservationOpen, setModalReservationOpen] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().substring(0, 10));
    const [numberOfPeople, setNumberOfPeople] = useState(2);
    const [alertSuccessForm, setAlertSuccessForm] = useState<boolean>(false);
    const [formError, setFormError] = React.useState<any>(false);


    const dateRef = useRef(null);
    const [selectHoraire, setSelectHoraire] = useState<string>("");
    const [formData, setFormData] = useState({
        email: "",
        mobileNumber: "",
        firstname: "",
        lastname: "",
        date: selectHoraire,
        numberOfPersons: numberOfPeople,
        comment: "",
        acceptTerms: true,
        acceptNews: "",
        tableReserved: [],
    });

    return (
        <ReservationContext.Provider value={{formError, setFormError, formData, setFormData, selectHoraire, setSelectHoraire, modalReservationOpen, setModalReservationOpen, numberOfPeople, setNumberOfPeople, selectedDate, setSelectedDate, dateRef, alertSuccessForm, setAlertSuccessForm}}>
            {children}
        </ReservationContext.Provider>
    );
}