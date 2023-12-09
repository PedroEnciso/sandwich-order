import { supabase } from "src/supabaseClient";

export interface ingredientOptions {
  proteinOptions: ingredientObject[];
  veggieOptions: ingredientObject[];
  cheeseOptions: ingredientObject[];
  breadOptions: ingredientObject[];
  condimentOptions: ingredientObject[];
  extraOptions: ingredientObject[];
}

export interface ingredientObject {
  id: string;
  name: string;
  extra_cost: number;
}

export const getOptions = async (): Promise<ingredientOptions> => {
  const { data: proteinOptions, error: proteinError } = await supabase
    .from("meat")
    .select("name, id, extra_cost")
    .eq("is_public", true)
    .returns<ingredientObject[]>();
  const { data: veggieOptions, error: veggieError } = await supabase
    .from("veggie")
    .select("name, id, extra_cost")
    .eq("is_public", true)
    .returns<ingredientObject[]>();
  const { data: cheeseOptions, error: cheeseError } = await supabase
    .from("cheese")
    .select("name, id, extra_cost")
    .eq("is_public", true)
    .returns<ingredientObject[]>();
  const { data: breadOptions, error: breadError } = await supabase
    .from("bread")
    .select("name, id, extra_cost")
    .eq("is_public", true)
    .returns<ingredientObject[]>();
  const { data: condimentOptions, error: condimentError } = await supabase
    .from("condiment")
    .select("name, id, extra_cost")
    .eq("is_public", true)
    .returns<ingredientObject[]>();
  const { data: extraOptions, error: extraError } = await supabase
    .from("extra")
    .select("name, id, extra_cost")
    .eq("is_public", true)
    .returns<ingredientObject[]>();

  if (proteinError) {
    throw new Error("Unable to retrieve ingredient information.");
  } else if (veggieError) {
    throw new Error("Unable to retrieve ingredient information.");
  } else if (cheeseError) {
    throw new Error("Unable to retrieve ingredient information.");
  } else if (breadError) {
    throw new Error("Unable to retrieve ingredient information.");
  } else if (condimentError) {
    throw new Error("Unable to retrieve ingredient information.");
  } else if (extraError) {
    throw new Error("Unable to retrieve ingredient information.");
  }

  const data = {
    proteinOptions,
    veggieOptions,
    cheeseOptions,
    breadOptions,
    condimentOptions,
    extraOptions,
  };

  return data;
};
