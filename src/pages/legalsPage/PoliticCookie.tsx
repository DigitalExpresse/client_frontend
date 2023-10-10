import React from 'react';
import './legalsPage.css';
import legals from "../../dataBrut/legals.json";


interface CookieProps {}

const PoliticCookie: React.FC<CookieProps> = () => {
    return (
        <div className={"container-legals"}>
            <div className="section-legals">
                <h1 className="title-legals">Politique de Cookies</h1>
                <p className="legals-subtitle">Dernière mise à jour : {legals.maj_date}</p>

                <h2 className="section-title-legals">Introduction</h2>
                <p className="section-text-legals">
                    Bienvenue sur {legals.website_url} (le "Site"). Le Site utilise des cookies
                    pour améliorer votre expérience de navigation. Cette politique de
                    cookies explique ce que sont les cookies, comment nous les utilisons,
                    vos choix concernant les cookies, et d'autres informations importantes
                    liées à votre vie privée et à la sécurité des données.
                </p>

                <h2 className="section-title-legals">Qu'est-ce qu'un cookie ?</h2>
                <p className="section-text-legals">
                    Un cookie est un petit fichier texte stocké sur votre ordinateur ou
                    votre appareil mobile lorsque vous visitez un site web. Il permet au
                    site web de mémoriser vos actions et préférences (telles que la
                    connexion, la langue, la taille de la police et d'autres préférences
                    d'affichage) sur une période de temps, de sorte que vous n'ayez pas à
                    les réintroduire chaque fois que vous revenez sur le site ou que vous
                    naviguez d'une page à l'autre.
                </p>

                {/* ... Ajoutez ici le reste de votre contenu de politique de cookies */}

                <h2 className="section-title-legals">Comment utilisons-nous les cookies ?</h2>
                <p className="section-text-legals">Nous utilisons les cookies à des fins diverses, notamment :</p>

                <ul>
                    <li>
                        <p className="section-text-legals"><b>Cookies essentiels</b> : Ces cookies sont nécessaires au
                            bon fonctionnement du site web et vous permettent d'accéder aux fonctionnalités de base,
                            telles que la navigation dans les pages et l'accès aux zones sécurisées du site.</p>
                    </li>

                    <li>
                        <p className="section-text-legals"><b>Cookies de performance</b> : Nous utilisons ces cookies
                            pour collecter des informations sur la manière dont les visiteurs utilisent le site, par
                            exemple, quelles pages sont les plus populaires, quelles pages sont les moins populaires, et
                            comment les visiteurs naviguent sur le site. Ces cookies nous aident à améliorer le
                            fonctionnement du site.</p>
                    </li>

                    <li>
                        <p className="section-text-legals"><b>Cookies de fonctionnalité</b> : Ces cookies permettent au
                            site de se souvenir de vos choix, tels que la langue ou la région, et de personnaliser votre
                            expérience. Ils peuvent également être utilisés pour fournir des fonctionnalités telles que
                            le partage de contenu sur les médias sociaux.</p>
                    </li>

                    <li>
                        <p className="section-text-legals"><b>Cookies de publicité et de ciblage</b> : Ces cookies sont
                            utilisés pour afficher des publicités pertinentes pour vous, en fonction de vos intérêts et
                            de votre comportement de navigation sur le site. Ils sont également utilisés pour limiter la
                            fréquence à laquelle vous voyez une publicité et pour mesurer l'efficacité des campagnes
                            publicitaires.</p>
                    </li>
                </ul>

                <h2 className="section-title-legals">Consentement</h2>
                <p className="section-text-legals"> En utilisant notre site web, vous consentez à ce que nous placions
                    des cookies sur votre ordinateur ou votre appareil mobile, comme décrit ci-dessus. Toutefois, vous
                    pouvez à tout moment modifier vos paramètres de cookies.</p>
                <h2 className="section-title-legals">Nous contacter</h2>
                <p className="section-text-legals">
                    Si vous avez des questions ou des préoccupations concernant notre
                    politique de cookies, veuillez nous contacter à l'adresse suivante :{' '}
                    <a className={"underline"} href={`mailto:${legals.company_email}`}>{legals.company_email}</a>
                </p>


            </div>
        </div>
    );
};

export default PoliticCookie;
