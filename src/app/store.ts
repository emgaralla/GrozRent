import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import categories from "../features/categoriesSlice";
import products from "../features/productsSlice";
import user from "../features/userSlice";

export const store = configureStore({
  reducer: {
    application,
    categories,
    products,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
