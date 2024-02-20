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

    // @ts-ignore
    //on va chercher toutes les images dans le dossier assets/images, qui ont une extension png, jpeg, svg ou webp et qui commence par diapo
    const imagesDiapo = require.context('../../assets/images', false, /diapo.*\.(png|jpe?g|svg|webp)$/);
    const imageDiapoList = imagesDiapo.keys().map((image: any) => imagesDiapo(image));

    return (
    <div>
        <Navbar />
        <Couverture />
        <AboutUs />
        <Tapas />
        {/*On place l'id horaires pour qu'au clic sur le bouton de la navbar (horaire), on puisse scroller jusqu'à cette div
        car sinon ca n'atterit pas au bon endroit ( a cause de la couverture qui est en position absolute)*/}
        <div id={"horaires"}></div>
        <CardSection />
        <HoraireContact/>
        <Diapo images={imageDiapoList}/>
        <InfoPractice />
        <NewsletterReserve />
        <Footer />
    </div>
    );
};

export default HomePage;