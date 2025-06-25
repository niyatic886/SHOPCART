import Navbar from "./Components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import CartPage from "./Pages/CartPage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogPage from "./Pages/BlogPage"
import ScrollToTop from "./Components/ScrollToTop"






function App(){
  return(

  <div>
<ScrollToTop />
 <Navbar />
 <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

  <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/products" element={<Products />}/>
  <Route path="/cart" element={<CartPage />}/>
  <Route path="/blog" element={<BlogPage />}/>
 </Routes> 

 </div>
)
}
export default App
