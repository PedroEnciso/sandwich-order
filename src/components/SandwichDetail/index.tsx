import { useState, FormEvent } from "react";
import { useQuery } from "react-query";
import { getOptions } from "src/http/getOptions";

import CheckboxList from "src/components/CheckboxList";
import RadioList from "src/components/RadioList";
import classes from "./SandwichDetail.module.css";

interface SandwichDetailProps {
  name: string;
  price: string;
  description: string;
  meatObject: Category;
  breadObject: Category;
  veggieArray: Category[];
  cheeseObject: Category;
  condimentArray: Category[];
}

interface Category {
  name: string;
  id: string;
  extra_cost: number;
}

function SandwichDetail({
  name,
  price,
  description,
  meatObject,
  breadObject,
  veggieArray,
  cheeseObject,
  condimentArray,
}: SandwichDetailProps) {
  const [chosenBread, setChosenBread] = useState(breadObject);
  const [chosenProtein, setChosenProtein] = useState(meatObject);
  const [chosenCheese, setChosenCheese] = useState(cheeseObject);
  const [chosenVeggies, setChosenVeggies] = useState<Category[]>(veggieArray);
  const [chosenCondiments, setChosenCondiments] =
    useState<Category[]>(condimentArray);
  const [chosenExtras, setChosenExtras] = useState<Category[]>([]);

  let totalPrice = price;
  // calculate the totalPrice with extras included
  if (chosenExtras.length > 0) {
    let addOnPrice = 0;
    chosenExtras.forEach((extra) => {
      return (addOnPrice += extra.extra_cost);
    });
    const totalPriceFloat = parseFloat(price) + addOnPrice / 100;
    totalPrice = totalPriceFloat.toString();
  }

  const { isLoading, data, isError, error } = useQuery("options", getOptions);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError && error instanceof Error) {
    return <p>{error.message}</p>;
  } else if (error) {
    return <p>There was an issue fetching content. Please reload the page.</p>;
  }

  const updateBread = (bread: Category) => {
    setChosenBread(bread);
  };

  const updateProtein = (protein: Category) => {
    setChosenProtein(protein);
  };

  const updateCheese = (cheese: Category) => {
    setChosenCheese(cheese);
  };

  const updateVeggie = (veggie: Category) => {
    setChosenVeggies((prevVeggies) => {
      // check if veggie is in chosenVeggies
      if (prevVeggies.filter((veg) => veg.id === veggie.id).length > 0) {
        // veggie is in prevVeggies, remove
        return prevVeggies.filter((veg) => veg.id !== veggie.id);
      }
      // add veggie to prevVeggie
      return prevVeggies.concat(veggie);
    });
  };

  const updateCondiment = (condiment: Category) => {
    setChosenCondiments((prevCondiments) => {
      // check if veggie is in chosenVeggies
      if (
        prevCondiments.filter((cond) => cond.id === condiment.id).length > 0
      ) {
        // veggie is in prevCondiments, remove
        return prevCondiments.filter((cond) => cond.id !== condiment.id);
      }
      // add veggie to prevVeggie
      return prevCondiments.concat(condiment);
    });
  };

  const updateExtras = (extra: Category) => {
    setChosenExtras((prevExtras) => {
      if (prevExtras.filter((ext) => ext.id === extra.id).length > 0) {
        return prevExtras.filter((ext) => ext.id !== extra.id);
      }
      return prevExtras.concat(extra);
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("chosen bread: ", chosenBread);
    console.log("chosen protein: ", chosenProtein);
    console.log("chosen veggies: ", chosenVeggies);
    console.log("chosen cheese", chosenCheese);
    console.log("chosen condiments", chosenCondiments);
  };

  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
      <p>{description}</p>
      <form className={classes.form} onSubmit={handleSubmit}>
        <fieldset>
          <legend className={classes.fieldsetTitle}>Bread</legend>
          {data && (
            <RadioList
              selectedObject={breadObject}
              options={data.breadOptions}
              name="bread"
              handleClick={updateBread}
            />
          )}
        </fieldset>
        <fieldset>
          <legend className={classes.fieldsetTitle}>Protein</legend>
          {data && (
            <RadioList
              selectedObject={meatObject}
              options={data.proteinOptions}
              name="protein"
              handleClick={updateProtein}
              showOptions={false}
            />
          )}
        </fieldset>
        <fieldset>
          <legend className={classes.fieldsetTitle}>Veggies</legend>
          {data && (
            <CheckboxList
              selectedArray={veggieArray}
              options={data.veggieOptions}
              name="veggie"
              handleClick={updateVeggie}
            />
          )}
        </fieldset>
        <fieldset>
          <legend className={classes.fieldsetTitle}>Cheese</legend>
          {data && (
            <RadioList
              selectedObject={cheeseObject}
              options={data.cheeseOptions}
              name="cheese"
              handleClick={updateCheese}
            />
          )}
        </fieldset>
        <fieldset>
          <legend className={classes.fieldsetTitle}>Condiments</legend>
          {data && (
            <CheckboxList
              selectedArray={condimentArray}
              options={data.condimentOptions}
              name="condiment"
              handleClick={updateCondiment}
            />
          )}
        </fieldset>
        <fieldset>
          <legend className={classes.fieldsetTitle}>Extra Add-ons</legend>
          {data && (
            <CheckboxList
              selectedArray={undefined}
              options={data.extraOptions}
              name="extra"
              handleClick={updateExtras}
            />
          )}
        </fieldset>
        <section>
          <h3>Sandwich summary: {name}</h3>
          <div>
            <p>Bread</p>
            <ul>
              <li>{chosenBread.name}</li>
            </ul>
          </div>
          <div>
            <p>Protein</p>
            <ul>
              <li>{chosenProtein.name}</li>
            </ul>
          </div>
          <div>
            <p>Veggies</p>
            <ul>
              {chosenVeggies.map((veggie) => (
                <li key={`summary_${veggie.id}`}>{veggie.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Cheese</p>
            {chosenCheese && (
              <ul>
                <li>{chosenCheese.name}</li>
              </ul>
            )}
          </div>
          <div>
            <p>Condiments</p>
            <ul>
              {chosenCondiments.map((condiment) => (
                <li key={`summary_${condiment.id}`}>{condiment.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Extra Add-ons</p>
            <ul>
              {chosenExtras.map((extra) => (
                <li key={`summary_${extra.id}`}>
                  {extra.name} (+ ${extra.extra_cost / 100})
                </li>
              ))}
            </ul>
          </div>
          <p>Total: {totalPrice}</p>
        </section>
        <button type="submit">Add sandwich to cart</button>
      </form>
    </>
  );
}

export default SandwichDetail;
