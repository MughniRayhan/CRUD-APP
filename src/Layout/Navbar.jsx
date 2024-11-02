import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

    const menu = [
        {
            id:1,
            name: "Home",
            link: "/"
        },
        {
            id:2,
            name: "Show Books",
            link: "/show-books"
        },
        {
            id:3,
            name: "Add Book",
            link: "/add-book"
        }
    ]

  return (
    <nav className='w-full bg-gradient-to-t from-red-500 to-red-600  text-white flex gap-8 justify-center py-4 sticky z-10 top-0 '>
        {menu.map((menu)=> {
           return <div key={menu.id}>
            <Link to={menu.link} 
           className='hover:text-yellow-400 duration-200 sm:text-[16px] text-[12px]'
           >
            {menu.name}
            </Link>
           </div>
        })}
    </nav>
  )
}

export default Navbar