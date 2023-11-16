import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import bike_banner from './Components/Assets/banner.png';
import scooter_banner from './Components/Assets/banner.png';
import electric_banner from './Components/Assets/banner.png';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bikes' element={<ShopCategory banner={bike_banner} category="bikes"/>}/>
        <Route path='/electric Zone' element={<ShopCategory banner={electric_banner} category="electric Zone"/>}/>
        <Route path='/scooters' element={<ShopCategory banner={scooter_banner} category="scooters"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
