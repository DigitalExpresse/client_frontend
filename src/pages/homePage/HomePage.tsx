import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Couverture from "./couverture/Couverture";
import Card from "./card/Card";
import HoraireContact from "./horaireContact/HoraireContact";
import Diapo from "./diapo/Diapo";
import AboutUs from "./aboutUs/AboutUs";
import NewsletterReserve from "./newsletterReserve/NewsletterReserve";
import Footer from "../../components/footer/Footer";
import './home.css';
import {images} from "../../assets/images/Image";
import InfoPractice from "./infoPractice/InfoPractice";
import Tapas from "./tapas/Tapas";
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
        <Card />
        <HoraireContact/>
        <InfoPractice />
        <NewsletterReserve />
        <Footer />
    </div>
    );
};

export default HomePage;