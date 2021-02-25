import React, { Component } from "react";
import { CartItem } from "../types/cartItem";
import { AppStateContext } from "./AppState";

interface Props {}

interface State {
  isOpen: boolean;
}

export default class Cart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleShowCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));

  getTotalItemCount = (items: CartItem[]) => {
    return items.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
  };
  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => (
          <div>
            <button type="button" onClick={this.handleShowCart}>
              {this.getTotalItemCount(state.cart.items)} pizzas
            </button>
            {this.state.isOpen && (
              <ul>
                {state.cart.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.price} &times; {item.quantity}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </AppStateContext.Consumer>
    );
  }
}
