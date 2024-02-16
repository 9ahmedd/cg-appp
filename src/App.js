
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Category from './components/category/Category';
import Home from './components/Homa/Home';
import Products from './components/products/Products';
import Product from './components/product/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  exact path='/' element={<Login/>}/>
        <Route   path='/home' element={<Home/>}/>
        <Route path='/cat' element={<Category />} />
        <Route path='/pros' element={<Products />} />
        <Route path='/pro/:proId' element= {<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
