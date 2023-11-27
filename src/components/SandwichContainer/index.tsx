import { useQuery } from "react-query";
import { getSandwiches } from "src/http/getSandwiches";
import SandwichItem from "src/components/SandwichItem";

import classes from "./SandwichContainer.module.css";

function SandwichList() {
  const { isLoading, isError, error, data } = useQuery(
    "sandwiches",
    getSandwiches,
    {
      retry: 3,
    }
  );

  return (
    <section className={classes.container}>
      <h2 className={classes.title}>Our Sandwiches</h2>
      {isLoading && <p>loading sandwiches...</p>}
      {isError && error instanceof Error && <p>{error.message}</p>}
      {data && (
        <ul className={classes.sandwichContainer}>
          {data.map((sandwich) => (
            <SandwichItem
              key={sandwich.id}
              name={sandwich.name}
              description={sandwich.description}
              id={sandwich.id}
              price={sandwich.price}
              imageUrl={sandwich.imageUrl}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default SandwichList;
