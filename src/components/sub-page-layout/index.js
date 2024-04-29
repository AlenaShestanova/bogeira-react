import React from 'react';
import { SlideshowLightbox } from 'lightbox.js-react';

import Footer from '../footer';
import { useResize } from '../../hooks/use-resize';

export const SubPageLayout = ({ object, name, material, photo, description, images }) => {
  const { isMobile } = useResize();

  return (
    <div className="generalContainerWithGallery">
      <div className="generalContainerWithGallery_info">
        {object} <br />
        {name} <br />
        {material} <br />
        <p className="generalContainerWithGallery_info_description">{description}</p>
        <span>{photo}</span>
      </div>
      <div className="generalContainerWithGallery_imagesList">
        <SlideshowLightbox
          theme="day"
          showControls
          backgroundColor="#FFF"
          showThumbnails
          className="generalContainerWithGallery_imagesList_sliderContainer"
        >
          {images.map(imgSrc => (
            <img src={imgSrc} alt="jewelry collection" />
          ))}
        </SlideshowLightbox>
      </div>
      <Footer isHalfPage={!isMobile} />
    </div>
  );
};
