import { createSlice } from "@reduxjs/toolkit"

// initial states
const initialBooks = {
    books: [
        {
            id:1,
            title:"Love Bangladesh",
            author:"Mughni Rayhan",
        },
        {
            id:2,
            title:"Bangladesh",
            author:"Tisha Rayhan",
        }
    ]
}

// action create
export const bookSlice = createSlice({
    name:"books",
    initialState: initialBooks,
    reducers:{
        showBooks: (state) => state,
    }
})

export const {showBooks} = bookSlice.actions;

export default bookSlice.reducer;