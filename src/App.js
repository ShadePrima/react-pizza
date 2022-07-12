import React from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";
// import pizzas from "./assets/pizza.json";
const pizzas = [];

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://62cc78498042b16aa7cff6cc.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => setItems(arr));
  }, []);

  console.log(555);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
              {items.map((obj) => (
                <PizzaBlock key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
