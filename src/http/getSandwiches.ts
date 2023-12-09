import { supabase } from "src/supabaseClient";

interface Sandwich {
  description: string;
  id: string;
  imageUrl: string;
  name: string;
  price: string;
}

export const getSandwiches = async (): Promise<Sandwich[]> => {
  const { data, error } = await supabase
    .from("sandwich")
    .select()
    .returns<Sandwich[]>();

  if (error) {
    throw new Error("Cannot find sandwiches.");
  }

  return data;
};
