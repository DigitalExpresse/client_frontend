export const fetchMenus = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/menu`);
    const data = await response.json();

    return data;
}

export const fetchMenuProduct = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/menu-product`);
    const data = await response.json();

    return data;
}

export const fetchCategoryByMenuId = async (id:number) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/category/menu/${id}`);
    const categories = await response.json();

    return categories;
}