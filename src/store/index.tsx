import { configureStore, createSlice } from "@reduxjs/toolkit";

interface Ingredient {
  name: string;
  id: string;
}

interface CartState {
  total: string | null;
  bread: Ingredient | null;
  cheese: Ingredient | null;
  protein: Ingredient[] | null;
  veggie: Ingredient[] | null;
  condiment: Ingredient[] | null;
  sandwichName: string | null;
}

const initialCartState: CartState = {
  total: null,
  bread: null,
  cheese: null,
  protein: null,
  veggie: null,
  condiment: null,
  sandwichName: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {},
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
