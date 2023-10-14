import React, { useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { ReservationContext } from "../../context/ReservationContext";
import {NavbarContext} from "../../context/NavbarContext";
import './navbar.css'
import restaurantInfo from "../../dataBrut/restaurantInfo.json";

const Navbar = () => {

    const { navbarOpen, setNavbarOpen } = useContext(NavbarContext);
    const {setModalReservationOpen } = useContext(ReservationContext);

    const closeNavbar = () => {
        setTimeout(() => {
            setNavbarOpen(false);
        } , 300);
    }

    return (
        <header>
            <div className="navbar fixed z-40 px-3 md:!px-8 py-2 flex justify-between items-center w-full bg-white md:py-3">
                <Link to="/">
                    <p onClick={() => setNavbarOpen(false)} className="text-xl font-bold" title="Accueil de notre site" >{restaurantInfo.name}</p>
                </Link>
                <div className="flex items-center">

                    <div className="hidden sm:block">
                        <Link to={'/carte'} className="m-2 font-bold hover:text-tertiary">Cartes & Menus</Link>
                        <Link className="m-2 font-bold hover:text-tertiary" to="/galerie">Photos</Link>
                        <a className="m-2 font-bold hover:text-tertiary" href="/#horaires">Accès / Contact</a>
                    </div>

                    { process.env.REACT_APP_DATA_MODE === 'static' ?
                        <a href={"tel:" + restaurantInfo.telNumber} className="uppercase mx-3 border-2 px-2 py-1 border-black bg-primaire text-xs text-white font-bold hover:cursor-pointer sm:!mr-0 hover:bg-tertiary hover:!border-tertiary transition ease-in-out duration-200 tracking-widest">Reservez</a>
                        :
                        <button onClick={() => setModalReservationOpen(true)} className="mx-3 border-2 px-2 py-1 border-black bg-primaire text-xs text-white font-bold hover:cursor-pointer sm:!mr-0 hover:bg-tertiary hover:!border-tertiary transition ease-in-out duration-200 tracking-widest">Reservez</button>
                    }

                    <i className={!navbarOpen ? "bi bi-list text-3xl hover:cursor-pointer sm:hidden" : "hidden"} onClick={() => setNavbarOpen(!navbarOpen)}></i>
                    <i className={navbarOpen ? "bi bi-x text-3xl hover:cursor-pointer sm:hidden animation-fadeIn" : "hidden"} onClick={() => closeNavbar()}></i>
                </div>

                {/*  Au clic du de l'icone menu, on affiche le menu burger  */}

                <div className={ navbarOpen ? "fadeIn bg-dark text-white absolute pt-14 top-12 left-0 w-full text-center sm:hidden h-screen" : "hidden" }>

                    <div className="text-md w-1/2 m-auto">
                        <Link to={'/carte'} className="block py-2 font-bold md:hover:text-tertiary" onClick={() => setNavbarOpen(false)}>Cartes & Menus</Link>
                        <a className="block py-2 font-bold md:hover:text-tertiary" href="/#horaires" onClick={() => setNavbarOpen(false)}>Accès / Contact</a>
                        <Link to={'/galerie'} className="block py-2 font-bold md:hover:text-tertiary" onClick={() => setNavbarOpen(false)}>Photos</Link>

                        { process.env.REACT_APP_DATA_MODE === 'static' ?
                            <a href={"tel:" + restaurantInfo.telNumber} className="block mx-auto w-36 border-2 my-3 px-2 py-1 border-white text-xs text-white font-bold hover:cursor-pointer sm:!mr-0 hover:bg-white hover:!border-white hover:!text-black transition ease-in-out duration-200 uppercase tracking-widest">Reservez</a>
                            :
                            <button onClick={() => {
                                setModalReservationOpen(true)
                                setNavbarOpen(false)
                            }} className="mx-3 w-36 border-2 my-3 px-2 py-1 border-white text-xs text-white font-bold hover:cursor-pointer sm:!mr-0 hover:bg-white hover:!border-white hover:!text-black transition ease-in-out duration-200 tracking-widest">Reservez</button>
                        }
                    </div>

                    <div className="flex justify-center mt-2">
                        <a rel={"noreferrer"} target={"_blank"} className='hover:!text-tertiary instagram-logo' href={String(restaurantInfo.socialNetworks[0])}>
                            <i className="bi bi-instagram text-2xl mx-2"></i>
                        </a>
                        <a rel={"noreferrer"} target={"_blank"} className={"'facebook-logo"} href={String(restaurantInfo.socialNetworks[1])}>
                            <i className="bi bi-facebook text-2xl mx-2"></i>
                        </a>
                    </div>

                </div>

            </div>
        </header>
    );
};

export default Navbar;

