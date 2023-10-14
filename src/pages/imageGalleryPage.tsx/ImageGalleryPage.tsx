import React, { useEffect, useState } from 'react';
import {handleClick, handleCloseModal, handleNext, handlePrev} from './ImageGalleryService';
import Navbar from "../../components/navbar/Navbar";
import NewsletterReserve from "../homePage/newsletterReserve/NewsletterReserve";
import Footer from "../../components/footer/Footer";
import { images } from "../../assets/images/Image";
import './imageGallery.css';
import ScrollToTop from "../../components/ScrollToTop";
import img from "../../assets/images/_X5A3335.webp";

const ImageGalleryPage = () => {

    const [selectedImage, setSelectedImage] = useState('');
    const [selectedImageClass, setSelectedImageClass] = useState('');

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
                     loading="eager"  src={img} alt={"Couverture qui illustre une de nos salade"}/>
                <h2 className={"couverture-title"}>Nos photos</h2>
            </div>

            <div className="imageGallery">
                {images.map((image, index) => {
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
            <ScrollToTop />
        </>
    );
}

export default ImageGalleryPage;
