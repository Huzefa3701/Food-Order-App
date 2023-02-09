import { useEffect, useState } from "react";

import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { BeatLoader } from "react-spinners";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://food-order-app-2fea3-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong! 😵");
      }

      const data = await response.json();

      let loadedMeals = [];

      for (const key in data) {
        const meal = {
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        };
        loadedMeals.push(meal);
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    }; 

    fetchMeals().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && (
          <BeatLoader
            style={{ display: "flex", justifyContent: "center" }}
            color="#8a2b06"
          />
        )}
        {httpError && (
          <p style={{ textAlign: "center", color: "red" }}>{httpError}</p>
        )}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
