import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BookSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [title,setTitle]= useState("");
  const [author,setauthor]= useState("");
  const numOfBooks = useSelector((state)=>state.booksReducer.books.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const book = {id: numOfBooks+1 ,title,author};
    dispatch(addBook(book));
    navigate("/show-books", {replace: true});
  }
  return (
    <div className='h-screen w-full  flex justify-center items-center bg-slate-100'>
     <div className='h-[300px]  bg-white shadow-lg shadow-gray-500 sm:-mt-40 -mt-20 px-5 py-5 rounded'>
     <h1 className='text-2xl font-bold text-center py-8 '>Add New Book</h1>
     <form 
     className='flex flex-col justify-center items-center gap-4'
     onSubmit={handleSubmit}
     >
       <div>
        <label htmlFor="title" className='font-semibold'>Title:</label>
        <input 
        type="text"
         id='title' 
         value={title} 
         onChange={(e)=>setTitle(e.target.value)} 
         required
         className='border border-gray-600 sm:w-[300px] mx-3 outline-none px-2'
         />
       </div>

       <div>
        <label htmlFor="author" className='font-semibold'>Author:</label>
        <input 
        type="text"
         id='author' 
         value={author} 
         onChange={(e)=>setauthor(e.target.value)} 
         required
         className='border border-gray-600 sm:w-[300px] mx-3 outline-none px-2'
         />
       </div>
      <button type='submit' className='bg-green-600 text-white sm:px-8 px-4 py-2  rounded hover:bg-green-500 duration-200'>Add Book</button>

     </form>
     </div>

    </div>
   
  )
}

export default AddBook