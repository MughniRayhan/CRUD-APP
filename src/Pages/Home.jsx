import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-2'>
       <div className='md:ml-20 order-2 md:order-1 text-center md:text-start mx-4'>
       <h1 className='md:text-7xl text-3xl font-bold  md:py-4'>Book CRUD App</h1>
       <p className='md:text-xl text-sm py-2 '>This is a CRUD app where you can  Create, Read, Update and Delete Books</p>
       <p className='text-sm text-gray-700 '>A CRUD app is a specific type of software application that consists of four basic operations; Create, Read, Update, Delete.</p>
       <Link to='/show-books'>
       <button className='bg-gradient-to-r from-blue-400 to-cyan-500 px-4 py-2 text-white rounded 
       mt-4  hover:scale-105 duration-200 '>
        Show Books
        </button>
       </Link>
       </div>
       <div className='order-1 md:order-2'>
        <img src='/image.png' alt="" 
        className='md:w-[500px] md:h-[500px] w-[200px] h-[200px] md:mt-20 mt-10'
        />
       </div>

    </div>
  )
}

export default Home