export const fetchProductById = async (id:number) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/product/${id}`);
    const data = await response.json();

    return data;
}