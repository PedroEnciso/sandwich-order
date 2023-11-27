import { Sandwich } from "src/types/Sandwich";

import classes from "./SandwichItem.module.css";

function SandwichItem({ name, price, description, id, imageUrl }: Sandwich) {
  function handleClick() {
    console.log(id);
  }

  return (
    <li className={classes.sandwichItem}>
      <img src={imageUrl} alt="" />
      <h3 className={classes.title}>{name}</h3>
      <p>{description}</p>
      <div className={classes.bottomContainer}>
        <p className={classes.price}>{price}</p>
        <button onClick={handleClick}>Choose</button>
      </div>
    </li>
  );
}

export default SandwichItem;
