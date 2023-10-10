import React from 'react';
import {fetchProductById} from "./ProductApi";
import api from "../../../dataBrut/api.json";

const Product = ({productData}: any) => {

    const [product, setProduct] = React.useState<any>([]);

    React.useEffect(() => {

        if(process.env.REACT_APP_DATA_MODE === 'static') setProduct(api.products.find((product: any) => product.id === productData.productId))
        else fetchProductById(productData.productId).then((res) => setProduct(res))
    }, [])


    return (
        <div className="flex flex-col items-center justify-center md:items-start">

            <p className="text-base">{product.name}</p>
            <p className="text-ligth my-2 md:text-left max-w-xl text-sm">{product.description}</p>

            {/*<div className="my-2">Sauce : <span className="text-ligth">Barbecue / Aioli / Poivre / Cheese</span></div>*/}

            {/*<div className="mt-2 flex flex-col justify-center md:flex-row">*/}
            {/*    <div>*/}
            {/*        <span>Supplément : </span>*/}
            {/*        <span className="text-ligth">Truffe + 2€ - Foie gras + 2€ </span>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="w-full flex flex-col relative">
                {productData.menuId == null &&  <p className="text-lg mt-3 md:mt-0 mb-2 self-center md:self-end md:absolute md:bottom-8">{product.price} €</p>}
                <hr className="w-full mx-auto !mb-10 mt-3 bg-tertiary opacity-30"/>
            </div>

        </div>
    );
};

export default Product;