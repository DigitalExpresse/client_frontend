import { ChangeEvent, FormEvent, SetStateAction} from "react";
import {fetchAvailableHours, fetchPassReservation} from "./ReservationApi";

export const getAvailableHours = async (selectedDate: any, numberOfPeople: any) => {
    try {
        const data = await fetchAvailableHours(selectedDate, numberOfPeople);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>, setNumberOfPeople: { (value: SetStateAction<number>): void; (arg0: any): void; }) => {
    setNumberOfPeople(event.target.value);
};

export const submitFormReservation = (e: FormEvent<HTMLFormElement>, formData: any, setAlertSuccessForm: (arg0: boolean) => void, setModalReservationOpen: (arg0: boolean) => void, setFormData: (arg0: any) => void) => {
    if (formData.firstname !== '' && formData.lastname !== '' && formData.email !== '' && formData.mobileNumber !== '') {

        fetchPassReservation(formData)
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                    return;
                }
                setAlertSuccessForm(true);
                setTimeout(() => {
                    setAlertSuccessForm(false);
                    setModalReservationOpen(false);
                    setFormData({email: "", mobileNumber: "", firstname: "", lastname: "", date: formData.date, numberOfPersons: 2, comment: "", acceptTerms: true, acceptNews: "",});
                    console.log(new Date().toISOString());
                    }, 5000);
            })
            .catch((error) => {
                console.error(error);
            });
    } else {
        alert('Veuillez remplir tous les champs obligatoires.');
    }
};

export const handleInputChange = (e: any, setFormData: (arg0: any) => void, formData: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
    });
};

export const handleDateChange = (dateRef: any, setSelectedDate: (arg0: any) => void) => {
    const {value} = dateRef.current;
    const formattedDate = formatDate(value);
    setSelectedDate(formattedDate);
};

export const formatDate = (dateString: string | number | Date) => {
    if (typeof dateString === 'string' && dateString.length === 10) {
        const date = new Date(dateString);
        return date.toISOString().substring(0, 10);
    }
    return new Date().toISOString().substring(0, 10);
};

export const checkFormToReserve = (formData: any, setFormData: (arg0: any) => void, setFormError: (arg0: any) => void) => {

    let formIsValid = true;

    const errors: any = {};

    if (!formData.firstname) {
        formIsValid = false;
        setFormError(true);
        setTimeout(() => {
            setFormError(false);
        }, 5000);
        errors.firstname = "Prénom requis";
    }

    if (!formData.lastname) {
        formIsValid = false;
        setFormError(true);
        setTimeout(() => {
            setFormError(false);
        }, 5000);
        errors.lastname = "Nom requis";
    }

    if (!formData.email || formData.email === "" || formData.email === " " || formData.email === undefined) {
        formIsValid = false;
        setFormError(true);
        setTimeout(() => {
            setFormError(false);
        }, 5000);
        errors.email = "Email requis";
    }

    if (typeof formData.email !== "undefined") {
        const lastAtPos = formData.email.lastIndexOf('@');
        const lastDotPos = formData.email.lastIndexOf('.');
        const patternEmailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);


        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && formData.email.indexOf('@@') === -1 && lastDotPos > 2 && (formData.email.length - lastDotPos) > 2) && !patternEmailRegex.test(formData.email as string)) {
            formIsValid = false;
            setFormError(true);
            setTimeout(() => {
                setFormError(false);
            }, 5000);
            errors.email = "L'email n'est pas valide";
        }
    }


    if (typeof formData.mobileNumber !== "undefined") {
        const pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(formData.mobileNumber)) {
            setFormError(true);
            setTimeout(() => {
                setFormError(false);
            }, 5000);
            formIsValid = false;
            errors.mobileNumber = "Numéro de téléphone invalide";
        }
    }

    if (formData.acceptTerms === false) {
        formIsValid = false;
        setFormError(true);
        setTimeout(() => {
            setFormError(false);
        }, 3000);
        errors.acceptTerms = "Veuillez accepter les conditions d'utilisation";
    }
    setFormData((prevData: any) => ({
        ...prevData,
        errors: errors
    }));

    return formIsValid;
}

export const formateDateChoiceInputText = (horraire: string) => {
    const day = horraire.substring(0, 10);
    const hour = horraire.substring(11, 16);

    return day + " à " + hour;
}
