import React from "react";

export const renderHoraires = (openingHours: any) => {
    return openingHours.map((jour: { label: string; horaires: any[]; }, index: React.Key | null | undefined) => (
        <div key={index}>
            <div className="mt-3 m-auto flex flex-col md:flex-row md:justify-center">
                <p className="text-white text-center mb-2 md:mr-10">{jour.label.split('-').map(
                    (word: string) => word.substring(0, 3)).join(' - ')}
                </p>
                <div className="md:flex md:flex-row flex-nowrap">
                        <p key={index} className="text-white opacity-70 text-center md:mr-5">{jour.horaires[0] + " - " + jour.horaires[1]}</p>
                </div>
            </div>
        </div>
    ));
};