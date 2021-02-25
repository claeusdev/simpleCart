import React from "react";
import { IPizza } from "../types/pizza";
import { useStateDispatch } from "./AppState";

interface PizzaProps {
  pizza: IPizza;
}

const Pizza: React.FC<PizzaProps> = ({ pizza }) => {
  const dispatch = useStateDispatch();
  return (
    <li>
      <h1>{pizza.name}</h1>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            payload: {
              item: {
                id: pizza.id,
                name: pizza.name,
                price: pizza.price,
              },
            },
          })
        }
      >
        Add to Cart
      </button>
    </li>
  );
};

export default Pizza;
