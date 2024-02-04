import {Key, useEffect, useState} from "react";
import {handleClick, handleCloseModal, handleNext, handlePrev} from "./ImageGalleryService";
import Navbar from "../../commonComponent/navbar/Navbar";
import NewsletterReserve from "../homePage/newsletterReserve/NewsletterReserve";
import Footer from "../../commonComponent/footer/Footer";
import ScrollToTopButton from "../../commonComponent/scrollToTopOfPage/ScrollToTopButton";
import './imageGallery.css';

const ImageGalleryPage = () => {

    const [selectedImage, setSelectedImage]: any = useState('');
    const [selectedImageClass, setSelectedImageClass] = useState('');

    // @ts-ignore
    const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg|webp)$/);
    const imageList = images.keys().map((image: any) => images(image));
    const couvertureImg = require('../../assets/images/couvertureImageGallery.webp');

    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (event.target.classList.contains('modal')) {
                handleCloseModal(setSelectedImage, setSelectedImageClass);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <Navbar/>

            <div className="couverture">
                <img className={"couverture-img"}
                     loading="eager" src={couvertureImg} alt="Couverture de la page galerie"/>
                <h2 className={"couverture-title"}>Nos photos</h2>
            </div>

            <div className="imageGallery">
                {imageList.map((image: string | undefined, index: Key | null | undefined) => {
                        return (
                            <img
                                className={"rounded img"}
                                key={index}
                                src={image}
                                alt={`Quelque représentation de notre restaurant ${index}`}
                                onClick={() => handleClick(image, setSelectedImage)}
                            />
                        )
                    }
                    )
                }
                {selectedImage && (
                    <div className={"modal"}>
                        <span className={"close"} onClick={() => handleCloseModal(setSelectedImage, setSelectedImageClass)}>&times;</span>
                        <div className={`modal-content ${selectedImageClass}`}>
                            <span className="prev"
                                  onClick={() => handlePrev(images, selectedImage, setSelectedImage, setSelectedImageClass)}>&#8249;</span>
                            <img className={"selectedImage"} src={selectedImage} alt="Selected Image" />
                            <span className="next"
                                  onClick={() => handleNext(images, selectedImage, setSelectedImage, setSelectedImageClass)}>&#8250;</span>
                        </div>
                    </div>
                )}
            </div>

            <NewsletterReserve />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

export default ImageGalleryPage;
