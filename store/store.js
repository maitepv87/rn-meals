import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../store/favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
