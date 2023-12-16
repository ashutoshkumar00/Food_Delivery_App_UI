import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from "./CartItem.module.css";
import { addItemIncart, removeItemFromCart } from '../ProductSlice/ProductSlice';

const CartItem = (props) => {

  const dispatch = useDispatch();
  const [count, setCount] = useState(props.item.count);

  return (
    <li>
      <div className={styles.meal}>

      <div className={styles.show}>
          <img className={styles.img} src={props.item.image} alt="meal"/>
        </div>

        <div className={styles.about}>
          <h3>{props.item.name}</h3>
          <div className={styles.description}>{props.item.description}</div>
          <div className={styles.price}>${props.item.price.toFixed(2)}</div>
        </div>
        <div  className={styles.button}>
        <button
            style={{ cursor: "pointer",marginRight:'10px' }}
            onClick={() => {
              if (count) {
                dispatch(removeItemFromCart(props.item));
                setCount((prev) => prev - 1);
              }
            }}
          >
            -
          </button>
          <h2 style={{ marginRight: 8 }}>{count}</h2>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(addItemIncart(props.item));
              setCount((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;