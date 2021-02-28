import React from "react";
import AppStateProvider from "./components/AppState";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";
import SpecialOffer from "./components/SpecialOffer";
import pizzas from "./data/index.json";

const App = () => {
  const specialOffer = pizzas.find((p) => p.specialOffer);
  return (
    <AppStateProvider>
      <div className="App">
        <Cart />
        {specialOffer && <SpecialOffer pizza={specialOffer} />}
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
