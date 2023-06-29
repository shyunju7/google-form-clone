import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import form from "./form";
import question from "./question";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["form", "question"],
};

const reducers = combineReducers({
  form,
  question,
});

export default persistReducer(persistConfig, reducers);
