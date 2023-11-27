import { supabase } from "src/supabaseClient";

// type Sandwich = {
//   id: string;
//   description: string;
//   imageUrl: string;
//   name: string;
//   price: string;
// };

export const getSandwiches = async (): Promise<Sandwich[]> => {
  const { data, error } = await supabase.from("sandwiches").select();

  if (error) {
    throw new Error("Cannot find sandwiches.");
  }

  return data;
};
