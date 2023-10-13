import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './diapo.css';

const Diapo = (images: any) => {
    return (
        <section className="m-3 mt-4 md:!mx-8">
            <div className="carousel-react-section sm:hidden">
                <Carousel interval={4000} autoPlay swipeable={true} dynamicHeight={true} infiniteLoop={true}
                          width={"100%"} ariaLabel="Diaporama de photo des produits et du restaurant">
                    {
                        images.images.map((image: any, index: number) => {
                            return (
                                <div key={index}>
                                    <img className="object-cover" alt="Un plat : saumon d'alaska" src={image}/>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>

            <div className="hidden sm:visible sm:grid sm:grid-flow-col gap-2">
                {
                    images.images.map((image: any, index: number) => {
                        return (
                            <img key={index} className="hover:scale-105 ease-in-out !w-full transition h-60 xl:h-96 object-cover" alt="Un plat : saumon d'alaska" src={image}/>
                        )
                    })
                }
            </div>

        </section>

    );
};

export default Diapo;