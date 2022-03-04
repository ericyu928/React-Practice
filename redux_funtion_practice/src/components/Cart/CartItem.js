import { useSelector, useDispatch } from 'react-redux';

import classes from './CartItem.module.css';

const CartItem = (props) => {

  const item = useSelector(state => state.cartItem)

  let haveItem = false;
  if (item.length > 0) {
    haveItem = true
  }

  const disPatch = useDispatch()

  const descamount = (title) => {
    disPatch({ type: 'descamount', title: title })
  }
  const addamount = (title) => {
    disPatch({ type: 'addamount', title: title })
  }
  return (
    <div>
      {haveItem && (
        item.map((aa) =>
          <li className={classes.item} key={Math.random().toString()}>
            <header>
              <h3>{aa.title}</h3>
              <div className={classes.price}>
                ${parseFloat((aa.price) * (aa.quantity)).toFixed(2)}{' '}
                <span className={classes.itemprice}>(${aa.price.toFixed(2)}/item)</span>
              </div>
            </header>
            <div className={classes.details}>
              <div className={classes.quantity}>
                x <span>{aa.quantity}</span>
              </div>
              <div className={classes.actions}>
                <button onClick={descamount.bind(this, aa.title)}>-</button>
                <button onClick={addamount.bind(this, aa.title)}>+</button>
              </div>
            </div>
          </li>
        )
      )
      }
    </div>
  );
};

export default CartItem;
