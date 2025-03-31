import './index';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Footer from './Footer';
import Contact from './Components/Contact';
import Products from './Components/Products';
import ProductsDetailed from './Components/ProductsDetailed';
import Appointment from './Components/Appointment';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
    <Route path='/products' element={<Products />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/book' element={<Appointment />} />
    <Route path='products/:title' element={<ProductsDetailed />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
