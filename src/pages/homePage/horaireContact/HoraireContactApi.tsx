export const fetchOpeningHours = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/opening-hour`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    return data;
}