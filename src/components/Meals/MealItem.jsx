import classes from './MealItem.module.css';

const MealItem = (props) => {
  const { name, description, price } = props;
  const formattedPrice = `$ ${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
