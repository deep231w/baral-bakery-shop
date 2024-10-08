import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import { ProductListing } from './pages/ProductListing'
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/' element={<ProductListing/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
