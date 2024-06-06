import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Favourites from "./pages/Favourites"
import Profile from "./pages/Profile"
import Product from "./pages/Products"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/favourites" element={<Favourites/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/products" element={<Product/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
