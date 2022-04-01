import { About } from 'component/About';
import Cart from 'component/Cart';
import Contact from 'component/Contact';
import Product from 'component/Product';
import Products from 'component/Products';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/products" element ={<Products/>}/>
        <Route path="/products/:id" element ={<Product/>}/>
        <Route path= "/cart" element = {<Cart/>}/>
        <Route path= "/about" element = {<About/>}/>
        <Route path= "/contact" element = {<Contact/>}/>


      </Routes>

    </>
  );
}

export default App;
