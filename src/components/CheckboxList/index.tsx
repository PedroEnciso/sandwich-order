import { ingredientObject } from "src/http/getOptions";
import { Ingredient } from "src/types/SandwichDetail";

interface CheckboxListProps {
  selectedArray: Ingredient[] | undefined;
  options: ingredientObject[];
  name: string;
  handleClick: (item: Ingredient) => void;
}

function CheckboxList({
  selectedArray,
  options,
  name,
  handleClick,
}: CheckboxListProps) {
  return (
    <>
      {selectedArray &&
        selectedArray.map((ingredient) => (
          <div key={ingredient.id}>
            <input
              type="checkbox"
              value={ingredient.id}
              name={name}
              defaultChecked
              onClick={() => handleClick(ingredient)}
            />
            <label htmlFor={ingredient.name}>{ingredient.name}</label>
          </div>
        ))}
      {options.map((ingredient) => {
        const filteredArray = selectedArray?.filter(
          (item) => item.id === ingredient.id || ingredient.extra_cost > 0
        );
        if (filteredArray && filteredArray.length > 0) {
          return;
        }
        return (
          <div key={ingredient.id}>
            <input
              type="checkbox"
              value={ingredient.id}
              name={name}
              onClick={() => handleClick(ingredient)}
            />
            <label htmlFor={ingredient.name}>
              {ingredient.name}
              {name === "extra" && ` (+ $${ingredient.extra_cost / 100})`}
            </label>
          </div>
        );
      })}
    </>
  );
}

export default CheckboxList;
