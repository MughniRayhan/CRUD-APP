import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import Navbar from '../Layout/Navbar'
import BooksView from '../Features/BooksView'
import AddBook from '../Features/AddBook'
import Footer from '../Layout/Footer'
import EditBook from '../Features/EditBook'
function Index() {
  return (
   < BrowserRouter>
   <Navbar/>
   <main>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/show-books' element={<BooksView/>}/>
    <Route path='/add-book' element={<AddBook/>}/>
    <Route path='/edit-book' element={<EditBook/>}/>
    <Route path='/*' element={<Error/>}/>
   </Routes>
   </main>
   <Footer/>
   </BrowserRouter>
  )
}

export default Index