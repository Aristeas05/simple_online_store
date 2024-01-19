import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const createList = createSlice({
    name: "list",
    initialState: initialState,
    reducers: {
        removeFromList: (state, action) => {
            state = state.filter(e => e.id !== action.payload);
            return state;
        },
        addToList: (state, action) => {
            state.push(action.payload);
            return state;
        },
        cleanList: (state, action) => {
            state = [];
            return state;
        },
    }
});

export const {addToList} = createList.actions;
export const {removeFromList} = createList.actions;
export const {cleanList} = createList.actions;
export default createList.reducer;