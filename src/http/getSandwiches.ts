import { supabase } from "src/supabaseClient";
import { Sandwich } from "src/types/Sandwich";

export const getSandwiches = async (): Promise<Sandwich[]> => {
  const { data, error } = await supabase.from("sandwiches").select();

  if (error) {
    throw new Error("Cannot find sandwiches.");
  }

  return data;
};
