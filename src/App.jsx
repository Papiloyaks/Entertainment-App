import { Route, Routes, useRoutes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Details from './Components/Details'




function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
    <Footer/>   
    </>
  )
}

export default App
