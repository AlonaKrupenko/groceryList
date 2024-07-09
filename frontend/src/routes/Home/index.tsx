import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";

const Home = () => {
  const RANDOM_MEAL_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
  const DETAILED_MEAL_URL =
    "www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

  const [randomRecipe, setRandomRecipe] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(DETAILED_MEAL_URL);
        const data = await res.json();
        console.log(data, "data from Api");
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipe();
  }, []);

  return (
    <div className={styles.homePage}>
      <div className={"contentWrapper"}>
        <h1>HOME</h1>
        
      </div>
    </div>
  );
};

export default Home;
