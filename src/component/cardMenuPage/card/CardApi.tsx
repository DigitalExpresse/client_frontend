export const fetchCards = async () => {
   const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card`);
   const data = await response.json();

   return data;
}

export const fetchCardProduct = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card-product`);
    const data = await response.json();

    return data;
}

export const fetchCategoryByCardId = async (id:number) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/category/card/${id}`);
    const categories = await response.json();

    return categories;
}