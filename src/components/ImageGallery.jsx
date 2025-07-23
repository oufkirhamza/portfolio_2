import React, { useState, useEffect } from 'react';
import { MdClose, MdChevronLeft, MdChevronRight, MdFullscreen } from 'react-icons/md';

const ImageGallery = ({ images, title, isOpen, onClose, initialIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            
            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    goToPrevious();
                    break;
                case 'ArrowRight':
                    goToNext();
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/50 to-transparent">
                <div className="flex items-center justify-between text-white">
                    <div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-gray-300">
                            {currentIndex + 1} of {images.length}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleFullscreen}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            title="Toggle fullscreen"
                        >
                            <MdFullscreen size={24} />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            title="Close gallery"
                        >
                            <MdClose size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Image */}
            <div className={`relative ${isFullscreen ? 'w-full h-full' : 'max-w-6xl max-h-[80vh]'} mx-4`}>
                <img
                    src={images[currentIndex]}
                    alt={`${title} ${currentIndex + 1}`}
                    className={`w-full h-full object-contain ${isFullscreen ? '' : 'rounded-lg'}`}
                />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all hover:scale-110"
                            title="Previous image"
                        >
                            <MdChevronLeft size={24} />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all hover:scale-110"
                            title="Next image"
                        >
                            <MdChevronRight size={24} />
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && !isFullscreen && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-full">
                    <div className="flex gap-2 px-4 py-2 bg-black/50 rounded-lg backdrop-blur-sm overflow-x-auto max-w-[90vw]">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                    currentIndex === index
                                        ? 'border-blue-400 scale-110'
                                        : 'border-white/30 hover:border-white/60'
                                }`}
                            >
                                <img
                                    src={image}
                                    alt={`${title} thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Dots Indicator for Fullscreen */}
            {images.length > 1 && isFullscreen && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                currentIndex === index ? 'bg-white' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            )}

            {/* Click outside to close */}
            <div
                className="absolute inset-0 -z-10"
                onClick={onClose}
            />
        </div>
    );
};

export default ImageGallery;
