import React from "react";
import { IPizza } from "../types/pizza";
import withAddToCart, { AddToCartProps } from "./AddToCart";

interface Props extends AddToCartProps {
  pizza: IPizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
  return (
    <>
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
    </>
  );
};
export default withAddToCart(SpecialOffer);
