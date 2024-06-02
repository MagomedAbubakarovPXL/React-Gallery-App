import React, {useEffect, useState} from 'react';
import {getImages} from '../services/DataProvider';
import Carousel from 'react-bootstrap/Carousel';


const HomePage = () => {
    const images = getImages();

    return (
        <div>
            <h1>Featured Paintings of the Week</h1>
            <Carousel>
                {images.map((image, index) => (
                    <Carousel.Item key={index} interval={5000}>
                        <img
                            className="d-block w-100 small-carousel-img"
                            src={image.location}
                            alt={image.alt}
                        />
                        <Carousel.Caption>
                            <h5 style={{color: image.color}}>{image.title}</h5>
                            <p style={{color: image.color}}>{image.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default HomePage;
