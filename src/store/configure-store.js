import { createStore } from "redux";
import { reducer as rootReducer } from "./service-worker-update";

const configureStore = (initialState = { serviceWorkerUpdated: false }) => {
  return createStore(rootReducer, initialState);
};

export default configureStore;
