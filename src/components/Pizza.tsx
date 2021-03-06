import React from "react";
import { IPizza } from "../types/pizza";
import withAddToCart, { AddToCartProps } from "./AddToCart";

interface PizzaProps extends AddToCartProps {
  pizza: IPizza;
}

const Pizza: React.FC<PizzaProps> = ({ pizza, addToCart }) => {
  return (
    <li>
      <h1>{pizza.name}</h1>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button
        onClick={() =>
          addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })
        }
      >
        Add to Cart
      </button>
    </li>
  );
};

export default withAddToCart(Pizza);
