import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import categories from "../features/categoriesSlice";
import products from "../features/productsSlice";
import user from "../features/userSlice";
import otzivs from "../features/otzivsSlice";
import comments from "../features/commentsSlice";

export const store = configureStore({
  reducer: {
    application,
    categories,
    products,
    user,
    otzivs,
    comments
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
