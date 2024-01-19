import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const createCounter = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        addCounter: (state, action) => {
            state = state + 1;
            return state;
        },
        reduceCounter: (state, action) => {
            state = state - 1;
            return state;
        },
        restartCounter: (state, action) => {
            state = 0;
            return state;
        },
    }
});

export const {addCounter} = createCounter.actions;
export const {reduceCounter} = createCounter.actions;
export const {restartCounter} = createCounter.actions;
export default createCounter.reducer;