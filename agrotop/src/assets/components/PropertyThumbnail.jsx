import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

const PropertyThumbnail = ({ property }) => {
    console.log("Property Data", property)
    const mainSliderRef = useRef(null);
    const thumbnailSliderRef = useRef(null);

    // Construct the full image URL
    const getImageUrl = (imagePath) => {
        const baseUrl = "https://api.drixel.ng/"; // Base URL of the server
        return `${baseUrl}${imagePath}`;
    };

    useEffect(() => {
        if (mainSliderRef.current && thumbnailSliderRef.current) {
            const main = new Splide(mainSliderRef.current, {
                type: 'fade',
                heightRatio: 0.4,
                pagination: false,
                arrows: false,
                cover: true,
                breakpoints: {
                    640: {
                        heightRatio: 1,
                    },
                },
            });

            const thumbnails = new Splide(thumbnailSliderRef.current, {
                autoplay: true,
                interval: 4000,
                rewind: true,
                fixedWidth: 150,
                fixedHeight: 100,
                isNavigation: true,
                gap: 10,
                focus: 'fixed',
                arrows: false,
                pagination: false,
                cover: true,
                dragMinThreshold: {
                    mouse: 4,
                    touch: 10,
                },
                breakpoints: {
                    640: {
                        fixedWidth: 66,
                        fixedHeight: 58,
                    },
                },
            });

            main.sync(thumbnails);
            main.mount();
            thumbnails.mount();
        }
    }, []);

    // Use optional chaining to safely access property.images
    const images = property?.images || [];

    return (
        <div id="main-slider" className="splide main-slide" ref={mainSliderRef}>
            <div className="splide__track">
                <ul className="splide__list">
                    {images.map((imgSrc, index) => (
                        <li className="splide__slide" key={index}>
                            <img
                                src={imgSrc}
                                alt={`${property?.name || 'Property'} ${index + 1}`}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div id="thumbnail-slider" className="splide thumbnail-slide" ref={thumbnailSliderRef}>
                <div className="splide__track">
                    <ul className="splide__list">
                        {images.filter(Boolean).map((imgSrc, index) => (
                            <li className="splide__slide" key={index}>
                                <img
                                    src={imgSrc}
                                    alt={`${property?.name || 'Property'} thumbnail ${index + 1}`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PropertyThumbnail;