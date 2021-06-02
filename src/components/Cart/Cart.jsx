import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = ({ onClose }) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((cartItem) => (
        <li key={cartItem.id}> {cartItem.name} </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.5</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
