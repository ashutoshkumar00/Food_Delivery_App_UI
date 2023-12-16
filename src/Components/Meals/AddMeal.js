import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./AddMeal.module.css";

function AddMeal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [meal, setMeal] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleFormSubmission = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/addproduct", {
        ...meal,
        price: parseFloat(meal.price),
      })
      .then((response) => {
        alert("product added");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleInput = (event) => {
    const { name, value } = event.target;

    setMeal((prevMeal) => ({
      ...prevMeal,
      [name]: value,
    }));
  };

  return (
    <div className={styles.main}>
      <h1 style={{ marginLeft: "30px" }}>Add Meal to Store</h1>
      <form onSubmit={handleFormSubmission}>
        <div className={styles.div}>
          <label for="name">Meal Name:</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={meal.name}
            onChange={handleInput}
          />
        </div>

        <div className={styles.div}>
          <label for="description">Description:</label>
          <input
            className={styles.input}
            type="text"
            name="description"
            value={meal.description}
            onChange={handleInput}
          />
        </div>

        <div className={styles.div}>
          <label for="price">Price:</label>
          <input
            className={styles.input}
            type="text"
            name="price"
            value={meal.price}
            onChange={handleInput}
          />
        </div>

        <div className={styles.div}>
          <label for="image">Image:</label>
          <input
            className={styles.input}
            type="text"
            name="image"
            value={meal.image}
            onChange={handleInput}
          />
        </div>

        <div className={styles.sub}>
          <input className={styles.input} type="submit" value="Submit" />
          <button className={styles.home}  onClick={()=>navigate("/")}>Home</button>
        </div>
      </form>
    </div>
  );
}

export default AddMeal;
