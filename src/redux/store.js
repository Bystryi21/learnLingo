import { configureStore } from "@reduxjs/toolkit";
import teachersReducer from "./teachers/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/slice";
import modalReducer from "./modal/slice";

const persistedAuthReducer = persistReducer(
  {
    key: "token",
    storage,
    whitelist: ["token"],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    auth: persistedAuthReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
