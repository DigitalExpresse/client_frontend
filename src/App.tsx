import {useContext, useEffect} from "react";
import {ReservationContext} from "./context/ReservationContext";
import Reservation from "./commonComponent/reservation/Reservation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTopAuto from "./commonComponent/scrollToTopOfPage/ScrollToTopAuto";
import NotFoundPage from "./component/notFoundPage/NotFoundPage";
import HomePage from "./component/homePage/HomePage";
import CardMenuPage from "./component/cardMenuPage/CardMenuPage";
import ImageGalleryPage from "./component/imageGalleryPage.tsx/ImageGalleryPage";
import PoliticCookie from "./component/legalsPage/PoliticCookie";
import PoliticConfidentiality from "./component/legalsPage/PoliticConfidentiality";
import MentionLegalCgu from "./component/legalsPage/MentionLegalCgu";
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
                    <Route path="*" element={<NotFoundPage/>}/>
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
