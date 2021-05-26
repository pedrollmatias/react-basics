import mealsImage from '../../assets/meals.jpg';
import classes from './PresentationImage.module.css';

const PresentationImage = () => {
  return (
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="Table of foods" />
    </div>
  );
};

export default PresentationImage;
