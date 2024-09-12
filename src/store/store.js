// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../reducers/cakeSlice";
import iceCreamReducer from "../reducers/iceCreamSlice";

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    }
});

export default store;
