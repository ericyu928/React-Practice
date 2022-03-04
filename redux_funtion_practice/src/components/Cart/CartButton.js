import { useSelector } from 'react-redux';

import classes from './CartButton.module.css';

const CartButton = (props) => {

  const item = useSelector(state => state.cartItem)

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{item.length}</span>
    </button>
  );
};

export default CartButton;
