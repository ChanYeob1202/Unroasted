import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import galleryImages from '../../data/galleryImages'

export default function PhotoGallery() {
    // Transform galleryImages to the format required by react-image-gallery
    const images = galleryImages.map(image => ({
        original: image.src,
        thumbnail: image.src,
        description: image.caption
    }));

    return (
      <div className="py-8">
        <h2 className="text-2xl text-coffee mb-8">Coffee Moments</h2>
        <ImageGallery 
            items={images}
            showPlayButton={false}
            showFullscreenButton={true}
            showNav={true}
            showThumbnails={true}
            thumbnailPosition="bottom"
            slideInterval={3000}
            slideOnThumbnailOver={true}
            additionalClass="custom-gallery"
        />
      </div>
    );
}
