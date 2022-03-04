import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description } = props;

  const disPatch = useDispatch();

  const addCart = () => {
    disPatch({ type: 'addCart',value:{
      title:props.title,
      price:props.price
    }
   });
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
