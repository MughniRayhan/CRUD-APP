import React, { useDebugValue, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBook } from './BookSlice';

function EditBook() {
   const location = useLocation();
   console.log(location)
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(updateBook({id,title,author}));
    navigate('/show-books', {replace: true});
  }
  return (
    <div>
      <h1 className='text-2xl font-bold text-center py-8 '>Edit Book</h1>
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
         onChange={(e)=>setAuthor(e.target.value)} 
         required
         className='border border-gray-600 sm:w-[300px] mx-3 outline-none px-2'
         />
       </div>
      <button 
      type='submit' 
      className='bg-green-600 text-white sm:px-8 px-4 py-2  rounded hover:bg-green-500 duration-200'>
        Update Book
        </button>

     </form>
    </div>
  )
}

export default EditBook