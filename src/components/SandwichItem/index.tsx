import { useState } from "react";
import { Sandwich } from "src/types/Sandwich";
import { getSandwichDetails } from "src/http/getSandwichDetails";
import Modal from "src/components/Modal";
import SandwichDetail from "src/components/SandwichDetail";
import classes from "./SandwichItem.module.css";

import { SandwichDetailType } from "src/types/SandwichDetail";

function SandwichItem({ name, price, description, id, imageUrl }: Sandwich) {
  const [sandwichDetails, setSandwichDetails] =
    useState<SandwichDetailType | null>(null);
  async function handleClick() {
    console.log(`Getting details for ${id}.`);
    const data = await getSandwichDetails(id);
    setSandwichDetails(data);
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
      {sandwichDetails && (
        <Modal>
          <SandwichDetail
            name={name}
            price={price}
            description={description}
            breadObject={sandwichDetails.bread[0]}
            meatObject={sandwichDetails.meat[0]}
            veggieArray={sandwichDetails.veggie}
            cheeseObject={sandwichDetails.cheese[0]}
            condimentArray={sandwichDetails.condiment}
          />
        </Modal>
      )}
    </li>
  );
}

export default SandwichItem;
