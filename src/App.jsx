import { useState } from 'react'
import './App.css'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import ListBook from './components/ListBook'
import AddBook from './components/AddBook'
import BookContext from './context/BookContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <BookContext.Provider>
      <Header />
      <Routes>
        <Route path='/' element={<ListBook />}></Route>
        <Route path='/add' element={<AddBook />}></Route>
      </Routes>
      </BookContext.Provider>
    </div>
  )
}

export default App
