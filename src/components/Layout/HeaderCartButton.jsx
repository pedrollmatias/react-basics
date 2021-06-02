import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

const HeaderCartButton = ({ onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Shopping Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
