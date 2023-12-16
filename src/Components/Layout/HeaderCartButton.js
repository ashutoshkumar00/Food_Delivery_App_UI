import React,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from '../../Store/cart-context'
import { useSelector } from "react-redux";

const HeaderCartButton = (props) => {

  const countOfItemInCart = useSelector((state)=>state.product.countOfItemInCart)

  const handleCartButton = () =>{
    props.onShowCart();
  }

  return (
    <button onClick={handleCartButton} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{countOfItemInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
