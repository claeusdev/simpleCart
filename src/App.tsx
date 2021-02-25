import React from "react";
import AppStateProvider from "./components/AppState";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";
import pizzas from "./data/index.json";

const App = () => {
  return (
    <AppStateProvider>
      <div className="App">
        <Cart />
        <ul>
          {pizzas.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.id} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
