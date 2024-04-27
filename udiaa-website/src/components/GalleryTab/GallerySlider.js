import React, { useState, useEffect, useRef } from 'react';
import "./Gallerytab.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ProgressiveImage from './ProgressiveImage';

const GallerySlider = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showCategories, setShowCategories] = useState(true);
    const [showEvents, setShowEvents] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showArrows, setShowArrows] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        fetchImageData();
    }, []);

    const fetchImageData = async () => {
          try {
            const response = await fetch('https://api.udiaa.or.tz/gallery_data');
            const data = await response.json();
            // Set the first image of each category as its thumbnail
            const categoriesWithThumbnails = data.map(category => ({
                ...category,
                thumbnail: category.images.length > 0 ? category.images[0].path : null
            }));
            setCategories(categoriesWithThumbnails);
        } catch (error) {
            console.error('Error fetching image data:', error);
        }
    };

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
        setSelectedEvent(null);
        setSelectedImage(null);
        setShowCategories(false);
    };

    const handleEventClick = (eventName) => {
        setSelectedEvent(eventName);
        setSelectedImage(null);
        setShowEvents(false);
    };

    const handleImageClick = (image, index) => {
        setSelectedImage(image.path);
        setSelectedIndex(index);
        setShowArrows(true);
    };

    const handleBackButtonClick = () => {
        setSelectedCategory(null);
        setSelectedEvent(null);
        setSelectedImage(null);
        setShowCategories(true);
        setShowEvents(true);
        setShowArrows(false);
    };

    const handleImageBackClick = (event) => {
        if (!event.target.classList.contains("arrow")) {
            setSelectedImage(null);
            setShowEvents(true);
            setShowArrows(false);
        }
    };

    const handlePreviousImage = (event) => {
        event.stopPropagation();
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
            setSelectedImage(categories.find(cat => cat.name === selectedCategory)
                .images[selectedIndex - 1].path);
        }
    };

    const handleNextImage = (event) => {
        event.stopPropagation();
        const totalImages = categories.find(cat => cat.name === selectedCategory).images.length;
        if (selectedIndex < totalImages - 1) {
            setSelectedIndex(selectedIndex + 1);
            setSelectedImage(categories.find(cat => cat.name === selectedCategory)
                .images[selectedIndex + 1].path);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleImageBackClick(event);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="gallery-container">
            {showCategories && (
                <div className="category-grid">
                    {categories.map((category, index) => (
                        <div key={index} className="category-item" onClick={() => handleCategoryClick(category.name)}>
                            <ProgressiveImage placeholder={category.thumbnail} src={category.thumbnail} alt={category.name} />
                            <div className="category-name">{category.name}</div>
                        </div>
                    ))}
                </div>
            )}
            {selectedCategory && (
                <div>
                    <button onClick={handleBackButtonClick} className="back-button">Back</button>
                    <h2 className="event-name">{selectedCategory}</h2>
                    <div className="image-grid">
                        {categories.find(cat => cat.name === selectedCategory)
                            .images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.path}
                                    alt={image.name}
                                    onClick={() => handleImageClick(image, index)}
                                />
                            ))}
                    </div>
                </div>
            )}
            {selectedImage && (
                <div className="modal" >
                    <img src={selectedImage} alt={selectedImage} ref={modalRef}/>
                    {showArrows && (
                        <div className="modal-navigation">
                            {selectedIndex > 0 && (
                                <AiOutlineArrowLeft className="arrow prev" onClick={handlePreviousImage} />
                            )}
                            {selectedIndex < categories.find(cat => cat.name === selectedCategory).images.length - 1 && (
                                <AiOutlineArrowRight className="arrow next" onClick={handleNextImage} />
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default GallerySlider;
