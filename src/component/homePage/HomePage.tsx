import {images} from "../../assets/images/Image";
import Navbar from "../../commonComponent/navbar/Navbar";
import Couverture from "./couverture/Couverture";
import AboutUs from "./aboutUs/AboutUs";
import Tapas from "./tapas/Tapas";
import Diapo from "./diapo/Diapo";
import HoraireContact from "./horaireContact/HoraireContact";
import InfoPractice from "./infoPractice/InfoPractice";
import NewsletterReserve from "./newsletterReserve/NewsletterReserve";
import Footer from "../../commonComponent/footer/Footer";
import CardSection from "./cardSection/CardSection";
import './homePage.css';

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
        {/*On place l'id horaires pour qu'au clic sur le bouton de la navbar, on puisse scroller jusqu'à cette div
        car sinon ca n'atterit pas au bon endroit ( a cause de la couverture qui est en position absolute)*/}
        <div id={"horaires"}></div>
        <CardSection />
        <HoraireContact/>
        <Diapo images={imagesFirstDiapo}/>
        <InfoPractice />
        <NewsletterReserve />
        <Footer />
    </div>
    );
};

export default HomePage;