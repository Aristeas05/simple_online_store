import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import itemListReducer from "./itemList/itemListSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        itemList: itemListReducer,
    }
    
})