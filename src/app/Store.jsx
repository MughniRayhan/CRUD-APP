import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../Features/BookSlice";

const store = configureStore({
    reducer: {
        booksReducer: booksReducer,
    }
})

export default store;