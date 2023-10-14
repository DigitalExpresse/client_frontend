import React, {useContext, useEffect} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from "./pages/homePage/HomePage";
import CardMenuPage from "./pages/cardMenuPage/CardMenuPage";
import {ReservationContext} from "./context/ReservationContext";
import Reservation from "./components/reservation/Reservation";
import ImageGalleryPage from "./pages/imageGalleryPage.tsx/ImageGalleryPage";
import PoliticCookie from "./pages/legalsPage/PoliticCookie";
import PoliticConfidentiality from "./pages/legalsPage/PoliticConfidentiality";
import MentionLegalCgu from "./pages/legalsPage/MentionLegalCgu";
import ScrollToTopAuto from "./components/ScrollToTopAuto";
import './styles/index.css';
import './styles/animations.css';

function App() {

    const {modalReservationOpen} = useContext(ReservationContext)

    const blockScroll = () => {
        modalReservationOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
    }

    useEffect(() => {
        blockScroll()
    }, [modalReservationOpen])

    return (

        <div>
            {process.env.REACT_APP_DATA_MODE !== "static" && <Reservation/>}
            <BrowserRouter>
                <ScrollToTopAuto/>
                <Routes>
                    <Route path="*" element={<HomePage/>}/>
                    <Route path="/" element={<HomePage/>}/>

                    <Route path="/carte" element={<CardMenuPage/>}/>
                    <Route path={"/galerie"} element={<ImageGalleryPage/>}/>

                    <Route path={"/politique-cookie"} element={<PoliticCookie/>}/>
                    <Route path={"/politique-confidentialite"} element={<PoliticConfidentiality/>}/>
                    <Route path={"/mentions-legales"} element={<MentionLegalCgu/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
