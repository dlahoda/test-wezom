import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { saveState, loadState } from "./localStorage";

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({
    contacts: store.getState().contacts,
  });
});

export default store;
