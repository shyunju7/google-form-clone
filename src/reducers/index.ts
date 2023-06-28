import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import form from "./form";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["form"],
};

const reducers = combineReducers({
  form,
});

export default persistReducer(persistConfig, reducers);
