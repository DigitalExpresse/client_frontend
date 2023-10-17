import React from 'react';
import Navbar from '../../components/general/navbar/Navbar';
import Couverture from "../../components/homePage/couverture/Couverture";
import Card from "../../components/homePage/card/Card";
import HoraireContact from "../../components/homePage/horaireContact/HoraireContact";
import Diapo from "../../components/homePage/diapo/Diapo";
import AboutUs from "../../components/homePage/aboutUs/AboutUs";
import NewsletterReserve from "../../components/homePage/newsletterReserve/NewsletterReserve";
import Footer from "../../components/general/footer/Footer";
import './home.css';
import {images} from "../../assets/images/Image";
import InfoPractice from "../../components/homePage/infoPractice/InfoPractice";
import Tapas from "../../components/homePage/tapas/Tapas";
const HomePage = () => {

    const imagesFirstDiapo = [
        images.find((image: any) => image.includes('_X5A3395')),
        images.find((image: any) => image.includes('_X5A3467')),
        images.find((image: any) => image.includes('_X5A3428')),
        images.find((image: any) => image.includes('_X5A3373')),
        images.find((image: any) => image.includes('_X5A3286')),
        images.find((image: any) => image.includes('_X5A3363')),
    ]

    return (
    <div>
        <Navbar />
        <Couverture />
        <AboutUs />
        <Tapas />
        <Diapo images={imagesFirstDiapo}/>
        <div id={"link-to-anchor-link"}></div>
        <Card />
        <HoraireContact/>
        <InfoPractice />
        <NewsletterReserve />
        <Footer />
    </div>
    );
};

export default HomePage;