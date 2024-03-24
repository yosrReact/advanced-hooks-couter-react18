import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counter/counterSlice"
import { logger } from "redux-logger"
import { error } from "./middlewares/error"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, error),
  devTools: process.env.NODE_ENV !== "production",
})
