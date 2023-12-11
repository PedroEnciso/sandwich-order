import classes from "src/components/SandwichDetail/SandwichDetail.module.css";

import { Ingredient } from "src/types/sandwichDetail";
import { ingredientObject } from "src/http/getOptions";

interface RadioListProps {
  selectedObject: Ingredient | undefined;
  options: ingredientObject[];
  name: string;
  handleClick: (item: Ingredient) => void;
  showOptions?: boolean;
}

function RadioList({
  selectedObject,
  options,
  name,
  handleClick,
  showOptions = true,
}: RadioListProps) {
  if (!showOptions) {
    options = options.filter((option) => {
      if (option.extra_cost > 0) {
        return true;
      } else if (option.name === "none") {
        return true;
      } else {
        return false;
      }
    });
  }

  // const centsToDollars = (cents: number) => {
  //   return (cents / 100).toLocaleString("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   });
  // };

  return (
    <>
      {selectedObject && (
        <div className={classes.radioGroup}>
          <>
            <input
              className={classes.option}
              type="radio"
              defaultChecked={true}
              name={name}
              id={selectedObject.name}
              value={selectedObject.id}
              onClick={() => handleClick(selectedObject)}
            />
            <label htmlFor={selectedObject.name}> {selectedObject.name}</label>
          </>
        </div>
      )}
      {options.map((option) => {
        if (
          (selectedObject && option.id === selectedObject.id) ||
          option.extra_cost > 0
        )
          return;
        return (
          <div key={option.id} className={classes.radioGroup}>
            <input
              className={classes.option}
              type="radio"
              name={name}
              value={option.id}
              defaultChecked={!selectedObject && option.name === "none"}
              onClick={() => handleClick(option)}
            />
            <label htmlFor={option.name}>{option.name}</label>
          </div>
        );
      })}
    </>
  );
}

export default RadioList;
