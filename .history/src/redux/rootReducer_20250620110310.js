// redux/rootReducer.js
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/appSlice";

// Redux Persist config
const rootPersistConfig = {
  key: "root", // persist root level state
  storage, // default: localStorage
  keyPrefix: "redux-", // optional prefix
  whitelist: ["app"], // only persist app slice
};

// Root reducer (combine all slices here)
const rootReducer = combineReducers({
  app: appReducer,
});

export { rootPersistConfig, rootReducer };
