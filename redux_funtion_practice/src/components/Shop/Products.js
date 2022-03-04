import { useSelector } from 'react-redux';

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const product = useSelector(state => state.productList)

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {
        product.map((p)=>
          <ul key={p.title}>
          <ProductItem
            title={p.title}
            price={p.price}
            description={p.description}
          />
        </ul>    
        )    
      }

    </section>
  );
};

export default Products;
