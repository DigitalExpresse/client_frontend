import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {setIsVisible(true);}
        else {setIsVisible(false);}
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        cursor: 'pointer',
                        backgroundColor: '#142231',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '5px'
                    }}
                >
                    ↑
                </div>
            )}
        </div>
    );
};

export default ScrollToTopButton;
