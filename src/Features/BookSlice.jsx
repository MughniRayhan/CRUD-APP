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
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBook: (state, action) =>{
            const id = action.payload;
             state.books = state.books.filter((book)=> book.id != id)
        }
    }
})

export const {showBooks, addBook, deleteBook} = bookSlice.actions;

export default bookSlice.reducer;