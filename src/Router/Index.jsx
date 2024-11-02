import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import Navbar from '../Layout/Navbar'
import BooksView from '../Features/BooksView'
import AddBook from '../Features/AddBook'
function Index() {
  return (
   < BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/show-books' element={<BooksView/>}/>
    <Route path='/add-book' element={<AddBook/>}/>
    <Route path='/*' element={<Error/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}

export default Index