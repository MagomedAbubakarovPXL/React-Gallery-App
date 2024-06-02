import React, {useState} from 'react';
import { getImages } from '../services/DataProvider';
import 'react-medium-image-zoom/dist/styles.css';
import {Image} from "../models/Image";

const GalleryPage = () => {
    const images = getImages();
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const handleImageClick = (image: Image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const handleOverlayContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="container my-5">
            <h2>Gallery</h2>
            <div className="row">
                {images.map((image, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4" onClick={() => handleImageClick(image)}>
                        <div className="card h-100">
                            <img src={image.location} className="card-img-top gallery_image" alt={image.alt} />
                            <div className="card-body">
                                <h5 className="card-title">{image.title}</h5>
                                <p className="card-text">{image.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="overlay" onClick={handleClose}>
                    <div className="overlay-content" onClick={handleOverlayContentClick}>
                        <img
                            alt={selectedImage.alt}
                            src={selectedImage.location}
                            className="zoomed-image"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
