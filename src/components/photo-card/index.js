import classes from './photo-card.module.scss';

export const PhotoCard = ({ img, text }) => {
  return (
    <div className={classes.photoCardContainer}>
      <img src={img} alt="photo" />
      <div className={classes.text}>{text}</div>
    </div>
  );
};
