import React, { useEffect } from 'react';
import { useContext } from "react";
import { ReservationContext } from "../../../../context/ReservationContext";
import {formateDateChoiceInputText, handleInputChange, submitFormReservation} from "../ReservationService";
import {checkFormToReserve} from "../ReservationService";

const SecondFormReservation = (formReservation: { setFormReservation: (arg0: number) => void; }) => {

    const { formError, setFormError, formData, setFormData, alertSuccessForm, setAlertSuccessForm, setModalReservationOpen, selectHoraire} = useContext(ReservationContext);

    const AlertDiv = ({message, classnameDiv = ""}: { message: string, classnameDiv?: string }) => {
        return (
            <div className={"text-red-700 pt-2 rounded relative " + classnameDiv} role="alert">
                <span className="block sm:inline text-danger text-xxs">{message}</span>
            </div>
        )
    }

    useEffect(() => {
        setFormData((prevData: any) => ({
            ...prevData,
            date: selectHoraire
        }));
    }, [selectHoraire]);

    const returnToFirstForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        formReservation.setFormReservation(1);
    };

    return (
        <form className="m-auto my-4 xs:max-w-md overflow-y-scroll !rounded-xl max-h-600px xs:max-h-700px" onSubmit={(e) => {
            e.preventDefault()
            if(checkFormToReserve(formData, setFormData, setFormError)) {
                return submitFormReservation(e, formData, setAlertSuccessForm, setModalReservationOpen, setFormData)
            }
        }}>

            <div className="bg-primaire flex flex-col justify-between items-center w-full px-6 py-7 border-white">

                <h2 className="text-center text-white mb-3 text-lg">Le Bouddoir</h2>
                <p className="text-center text-white mb-3 px-6">
                    Nous sommes ravis de vous accueillir prochainement dans notre restaurant.
                    <br />
                    <br />
                    Pour réserver votre table, veuillez remplir le formulaire ci-dessous.
                </p>

                <p className="text-white text-center"></p>

                <div className="flex flex-col md:flex-row lg:flex-row w-full justify-center mt-3">

                    <div className="relative w-full bg-white rounded">
                        <input onClick={() => formReservation.setFormReservation(1)} className="font-bold py-2 pl-14 w-full rounded border-white border-x-2 text-sm" type="text" defaultValue={formateDateChoiceInputText(selectHoraire) + " "} name="date" id="date" />
                        <i className="bi bi-calendar-week absolute top-1/2 transform -translate-y-1/2 left-4"></i>
                        <button className="text-xxs absolute top-1/2 transform -translate-y-1/2 right-3 bg-primaire text-white rounded py-1 px-2 fadeIn" onClick={(e) => returnToFirstForm(e)}>Modifier</button>
                    </div>
                </div>
            </div>

            <div className="border-white border-8 bg-white py-4">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col justify-around sm:flex-row">

                        <div className="mb-3 mx-4 sm:mx-1 fadeIn">
                            <label htmlFor="firstname" className="block text-sm font-bold text-black mb-3">
                                Prénom *
                            </label>

                            <input value={formData.firstname} type="text" name="firstname" id="firstname" autoComplete="given-firstname" className="py-2 px-2 rounded border w-full" onChange={(e) => handleInputChange(e, setFormData, formData)} />
                            {formData.errors?.firstname && <AlertDiv message={formData.errors.firstname}/>}
                        </div>

                        <div className="mb-3  mx-4 sm:mx-1 fadeIn">
                            <label htmlFor="lastname" className="block text-sm font-bold mb-3">
                                Nom *
                            </label>

                            <input value={formData.lastname} type="text" name="lastname" id="lastname" autoComplete="given-lastname" className="py-2 px-2 rounded border  w-full" onChange={(e) => handleInputChange(e, setFormData, formData)} />
                            {formData.errors?.lastname && <AlertDiv message={formData.errors.lastname}/>}
                        </div>

                    </div>

                    <div className="flex flex-col justify-around sm:flex-row">

                        <div className="mb-3  mx-4 sm:mx-1">
                            <label htmlFor="email" className="block text-sm font-bold mb-3">
                                Email *
                            </label>

                            <input value={formData.email} type="email" name="email" id="email" autoComplete="email" className="py-2 px-2 rounded border w-full" onChange={(e) => handleInputChange(e, setFormData, formData)} />
                            {formData.errors?.email && <AlertDiv message={formData.errors.email}/>}
                        </div>

                        <div className="mb-3 mx-4 sm:mx-1">
                            <label htmlFor="mobileNumber" className="block text-sm font-bold mb-3">
                                Téléphone
                            </label>

                            <input value={formData.mobileNumber} type="tel" name="mobileNumber" id="mobileNumber" autoComplete="given-mobileNumber" className="py-2 px-2 rounded border-gray-400 border w-full" onChange={(e) => handleInputChange(e, setFormData, formData)} />
                            {formData.errors?.mobileNumber && <AlertDiv message={formData.errors.mobileNumber}/>}
                        </div>

                    </div>

                    <div >
                        <div className="mx-4">
                            <label htmlFor="comment" className="block text-sm font-bold mb-3">
                                Commentaire
                            </label>

                            <textarea value={formData.comment} name="comment" id="comment" className="py-2 px-2 rounded border w-full" onChange={(e) => handleInputChange(e, setFormData, formData)}></textarea>
                        </div>

                    </div>
                </div>

                {formData.errors?.acceptTerms && <AlertDiv classnameDiv="text-center" message={formData.errors.acceptTerms}/>}

                <div className={formData.errors?.acceptTerms ? "flex mb-0.5 min-h-[1.5rem] pl-[1.5rem] mx-2 mt-1" : "flex mb-0.5 min-h-[1.5rem] pl-[1.5rem] mx-2 mt-3"}>
                    <input
                        className={"relative float-left bottom-3 xs:bottom-1"}
                        type="checkbox"
                        value={formData.acceptTerms}
                        checked={formData.acceptTerms}
                        id="acceptTerms"
                        onChange={(e) => {
                            setFormData((prevData: any) => ({
                                ...prevData,
                                acceptTerms: !prevData.acceptTerms
                            }));
                        }}
                    />
                    <label
                        className="inline-block pl-[0.5rem] hover:cursor-pointer text-xs"
                        htmlFor="acceptTerms"
                    >
                        J'accepte les conditions générales d'utilisation du service.*
                        <br/>
                    </label>
                </div>

                <div className="flex mb-0.5 min-h-[1.5rem] pl-[1.5rem] mx-2 mt-2">
                    <input
                        value={formData.acceptNews.toString()}
                        className={"relative bottom-3"}
                        type="checkbox"
                        id="acceptNews"
                        onChange={(e) => handleInputChange(e, setFormData, formData)}
                    />
                    <label
                        className="inline-block pl-[0.5rem] hover:cursor-pointer text-xs"
                        htmlFor="receiveUpdates"
                    >
                        Je souhaite recevoir les actualitées et programmation du restaurant par email.
                    </label>
                </div>

                {formError && <AlertDiv classnameDiv="text-center" message="Veuillez remplir correctement le formulaire"/>}

                <button
                    className={alertSuccessForm ? "bg-tertiary text-white rounded py-2 px-3 w-90% block mt-2 mb-4 mx-auto" : formError === true ? "bg-danger text-white rounded py-2 px-3 w-90% block my-4 mx-auto" : "bg-dark text-white rounded py-2 px-3 w-90% block my-4 mx-auto" }
                    type="submit"
                >
                    {alertSuccessForm ? "Réservation effectuée" : "Réserver"}
                </button>

                {!alertSuccessForm ? null : <p className={"text-center text-xs px-4 mb-4 font-bold text-tertiary"}>Vous allez recevoir un mail pour la confirmation de demande de réservation, lorsque elle sera accepté vous serez également notifier par mail</p>}

                <p className="text-xxs mx-4 mt-0.5">Données récoltées ....</p>
            </div>

        </form>
    );
};

export default SecondFormReservation;
