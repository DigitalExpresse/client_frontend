import React from 'react';
import restaurantInfo from "../../dataBrut/restaurantInfo.json";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer
            className="bg-grayLighter mb-3 text-gray mx-3 md:!mx-8 flex flex-col md:flex-row justify-between items-center px-6 py-3 text-xs font-bold">

            <p className="text-center md:text-left mb-2 md:!mb-0">© 2023 {restaurantInfo.name} - DigitalExpress</p>

            <div className="flex justify-center md:justify-end flex-wrap">
                <Link to={"/mentions-legales"} className="mx-2 cursor-pointer ">Mentions
                    légales</Link>
                <Link to={"/politique-confidentialite"}
                   className="mx-2 cursor-pointer">Politique de confidentialité</Link>
                <Link to={"/politique-cookie"} className="mx-2 cursor-pointer">Politique
                    de cookies</Link>
            </div>

        </footer>
    );
};

export default Footer;