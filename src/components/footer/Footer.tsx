import React from 'react';

const Footer = () => {
    return (
        <footer
            className="bg-grayLighter mb-3 text-black mx-3 md:!mx-8 flex flex-col md:flex-row justify-between items-center px-6 py-3 text-xs">

            <p className="text-center md:text-left mb-2 md:!mb-0">© 2021 - Tous droits réservés</p>

            <div className="flex justify-center md:justify-end flex-wrap">
                <a rel={"noreferrer"} target={"_blank"} href="/mentions-legales" className="mx-2 cursor-pointer ">Mentions
                    légales</a>
                <a rel={"noreferrer"} target={"_blank"} href="/cgu" className="mx-2 cursor-pointer">CGU</a>
                <a rel={"noreferrer"} target={"_blank"} href="/politique-confidentialite"
                   className="mx-2 cursor-pointer">Politique de confidentialité</a>
                <a rel={"noreferrer"} target={"_blank"} href="/politique-cookie" className="mx-2 cursor-pointer">Politique
                    de cookies</a>
            </div>

        </footer>
    );
};

export default Footer;