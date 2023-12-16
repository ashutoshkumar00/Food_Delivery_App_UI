import styles from "./AvailableMeals.module.css";
import axios from 'axios'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useDispatch, useSelector } from "react-redux";
import { initialProducts } from "../ProductSlice/ProductSlice";
import {useEffect} from 'react'


const AvailableMeals = (props) => {
  const dispatch = useDispatch();
  const listOfMealsInStore = useSelector(
    (state) => state.product.totalProductsInStore
  );

  useEffect(() => {
    loadMeals();
  }, []);

  const loadMeals = () => {
    axios
      .get("http://localhost:8000/getproducts")
      .then((response) => {
        dispatch(initialProducts(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };

  const mealList = listOfMealsInStore.map((item) => (
    <MealItem  key={item.id} item={item} />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
