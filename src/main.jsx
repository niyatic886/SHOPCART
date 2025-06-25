
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style.css';


import App from './App.jsx'
import ProductProvider from "./contexts/ProductContext.jsx";
import CartProvider from "./contexts/CartContext";

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <CartProvider>
    <BrowserRouter>
   <App />
 
  </BrowserRouter>
</CartProvider>
  </ProductProvider>
  
   
)
