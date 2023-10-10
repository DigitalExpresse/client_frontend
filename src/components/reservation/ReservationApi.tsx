export const fetchAvailableHours = async (date: any, numberOfPeople: any) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reservation/availability`, {
        // const response = await fetch(`${process.env.BACKEND_URL}/api/reservation/availability`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date,
            numberOfPeople
        })
    });
    const data = await response.json();
    return data;
}

export const fetchPassReservation = async (formData: any) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reservation/create_reservation`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}