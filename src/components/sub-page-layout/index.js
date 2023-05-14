import { Footer } from '../footer';

export const SubPageLayout = ({ object, name, material, photo, description, images }) => {
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
        {images.map(imgSrc => (
          <img src={imgSrc} alt="jewelry collection" />
        ))}
      </div>
      <Footer isHalfPage />
    </div>
  );
};
