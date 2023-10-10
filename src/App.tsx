import React, {useContext, useEffect} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './styles/index.css';
import './styles/animations.css';
import HomePage from "./pages/homePage/HomePage";
import CardMenuPage from "./pages/cardMenuPage/CardMenuPage";
import {ReservationContext} from "./context/ReservationContext";
import Reservation from "./components/reservation/Reservation";
import ImageGalleryPage from "./pages/imageGalleryPage.tsx/ImageGalleryPage";
import Cookie from "./pages/legalsPage/Cookie";
import ScrollToTop from "./components/ScrollToTop";
import PoliticConfidentiality from "./pages/legalsPage/PoliticConfidentiality";
import Cgu from "./pages/legalsPage/Cgu";
import MentionLegalCgu from "./pages/legalsPage/MentionLegalCgu";

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
                <Routes>
                    <Route path="*" element={<HomePage/>}/>
                    <Route path="/" element={<HomePage/>}/>

                    <Route path="/carte" element={<CardMenuPage/>}/>
                    <Route path={"/galerie"} element={<ImageGalleryPage/>}/>

                    <Route path={"/politique-cookie"} element={<Cookie/>}/>
                    <Route path={"/politique-confidentialite"} element={<PoliticConfidentiality/>}/>
                    <Route path={"/cgu"} element={<Cgu/>}/>
                    <Route path={"/mentions-legales"} element={<MentionLegalCgu/>}/>
                </Routes>
            </BrowserRouter>
            <ScrollToTop/>
        </div>
    );
}

export default App;
