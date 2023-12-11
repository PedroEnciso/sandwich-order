import { supabase } from "src/supabaseClient";
import { SandwichDetailType } from "src/types";

export const getSandwichDetails = async (
  id: string
): Promise<SandwichDetailType> => {
  const { data, error } = await supabase
    .from("sandwich")
    .select(
      "name, id, bread(name, id), meat(name, id), veggie(name, id), cheese(name, id), condiment(name, id)"
    )
    .eq("id", id)
    .returns<SandwichDetailType[]>();

  if (error) {
    console.log(error);
    throw new Error("Unable to retrieve sandwich information.");
  }

  console.log(data[0]);
  return data[0];
};
