import { Footer } from '../../../components/footer';

export const JewelrySubPage = ({ object, name, material, photo, description, images }) => {
  return (
    <div className="generalContainer">
      <div className="generalContainer_info">
        {object} <br />
        {name} <br />
        {material} <br />
        <p className="generalContainer_info_description">{description}</p>
        <span>{photo}</span>
      </div>
      <div className="generalContainer_imagesList">
        {images.map(imgSrc => (
          <img src={imgSrc} alt="jewelry collection" />
        ))}
      </div>
      <Footer isHalfPage />
    </div>
  );
};
