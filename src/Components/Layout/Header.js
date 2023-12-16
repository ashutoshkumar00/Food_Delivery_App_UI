import {  Link } from "react-router-dom";
import mealsImage from '../../assets/meals.jpg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {

  return (
    <>
      <header className={styles.header}>
        <h1>Gourmet Grove Bistro</h1>
        <Link to="/addmeal"><button className={styles.add}>Add Meal In Store</button></Link>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A Table full of delicious meals" />
      </div>
    </>
  )
}

export default Header
