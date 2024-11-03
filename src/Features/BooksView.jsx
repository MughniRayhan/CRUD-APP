import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from './BookSlice';
import { Link } from 'react-router-dom';

function BooksView() {
    const books = useSelector((state)=>state.booksReducer.books);
    const dispatch = useDispatch();

    // delete book
    const handleDelete = (id) =>{
         dispatch(deleteBook(id));
    }
    
  return (
    <div className='w-full flex flex-col justify-center items-center my-8'>
        <h2 className='text-2xl font-bold py-8'>List of Books</h2>

        <table className='border-collapse border border-black lg:w-[50%] text-center w-[90%] text-[12px] sm:text-[16px]'>
            <thead className=' h-10 bg-gray-100'>
                <tr className='text-[12px] sm:text-[16px]'>
                    <th className='border border-black'>Title</th>
                    <th className='border border-black'>Author</th>
                    <th className='border border-black'>Action</th>
                </tr>
            </thead>
            <tbody >
                {books && books.map((book)=>{
                    const {id,title,author} = book;
                    return <tr key={id} className='border border-black h-14 '> 
                        <td className='border border-black p-4'>{title}</td>
                        <td className='border border-black p-4'>{author}</td>
                        <td >
                            <Link to='/edit-book' state={{id, title, author}}>
                            <button 
                            className='sm:bg-blue-600 px-4 py-1 sm:text-white text-blue-600 rounded hover:bg-blue-500'
                            
                            >Edit
                            </button>
                            </Link>
                            <button 
                            className='sm:bg-red-600 px-4 py-1 sm:text-white text-red-600 sm:mx-2 rounded  hover:bg-red-500'
                            onClick={()=>handleDelete(id)}
                            >
                            Delete
                            </button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default BooksView