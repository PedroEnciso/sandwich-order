import SandwichList from "src/components/SandwichContainer";

import classes from "src/App.module.css";

function App() {
  return (
    <main>
      <h1 className={classes.title}>Welcome to Pedro's sandwich shop</h1>
      <p className={classes.description}>
        Thank you for visiting our shop. Choose your sandwich, then customize
        your toppings and place your order!
      </p>
      <SandwichList />
    </main>
  );
}

export default App;
