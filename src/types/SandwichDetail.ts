export interface SandwichDetailType {
  id: string;
  name: string;
  bread: Ingredient[];
  cheese: Ingredient[];
  condiment: Ingredient[];
  meat: Ingredient[];
  veggie: Ingredient[];
}

export interface Ingredient {
  id: string;
  name: string;
  extra_cost: number;
}
