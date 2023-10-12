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
const HomePage = () => {


    const imagesFirstDiapo = [
        images.find((image: any) => image.includes('_X5A3419')),
        images.find((image: any) => image.includes('_X5A3444')),
        images.find((image: any) => image.includes('_X5A3395')),
        images.find((image: any) => image.includes('_X5A3373')),
    ]

    const imagesSecondDiapo = [
        images.find((image: any) => image.includes('_X5A3419')),
        images.find((image: any) => image.includes('_X5A3444')),
        images.find((image: any) => image.includes('_X5A3395')),
        images.find((image: any) => image.includes('_X5A3373')),
    ]

    return (
    <div>
        <Navbar />
        <Couverture />
        <AboutUs />
        <Card />
        <Diapo images={imagesFirstDiapo}/>
        <HoraireContact/>
        <InfoPractice />
        <Diapo images={imagesSecondDiapo} />
        <NewsletterReserve />
        <Footer />
    </div>
    );
};

export default HomePage;