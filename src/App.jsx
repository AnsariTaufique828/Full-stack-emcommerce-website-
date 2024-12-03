


import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Header from './Component/Header'


function App() {


  return (
    <BrowserRouter>
    <Header/>
   <Routes>
    <Route path = "/"  element= {<Home/>}/>
   </Routes>
    </BrowserRouter>
  )
}

export default App
