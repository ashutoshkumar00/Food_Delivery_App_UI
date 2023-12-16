import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { handleOrder } from "../ProductSlice/ProductSlice";

const Cart = (props) => {
  const dispatch = useDispatch();
  const totalItemInCart = useSelector((state) => state.product.itemInCart);
  let totalprice = 0;

  totalItemInCart.forEach((element) => {
    totalprice += element.count * element.price;
  });

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {totalItemInCart.map((item) => (
        <li>
          {item.count ? (
            <CartItem
              key={props.id}
              item={item}
            />
          ) : (
            <></>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHidingCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${totalprice.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHidingCart}>
          Close
        </button>
        <button
          className={styles["button"]}
          onClick={() => {
            dispatch(handleOrder());
            props.onHidingCart();
          }}
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
