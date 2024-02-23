import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';

import App from './App';
import {ReservationConsumer} from "./context/ReservationContext";
import {NavbarConsumer} from "./context/NavbarContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <React.StrictMode>
            <NavbarConsumer>
                <ReservationConsumer>
                    <App />
                </ReservationConsumer>
            </NavbarConsumer>
        </React.StrictMode>

    </>
);
