import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./Menu.store";

const store = configureStore({
  reducer: { menu: menuReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export default store;
