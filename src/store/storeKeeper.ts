import { compose, configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./rootReducer";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const storeKeeper = configureStore({
    reducer: RootReducer,
    enhancers: composeEnhancers,
    devTools: true,
});

export default storeKeeper;