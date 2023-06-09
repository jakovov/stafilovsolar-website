import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/pages/Home'
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Invertors from './pages/Invertors';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Order from './components/Order';
function App() {
  return (
      <div className='App'>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/zavasiotdom' element={<Foryourhome/>}/>
          <Route path='/zabiznis' element={<Foryourbusiness/>}/> */}
          <Route path='/fotovoltaici' element={<Products/>}/>
          <Route path='/invertori' element={<Invertors/>}/>
          <Route path='/proekti' element={<Projects/>}/>
          <Route path='/zanas' element={<About/>}/>
          <Route path='/kontakt' element={<Contact/>}/>
          <Route path='/naracka' element={<Order/>}/>
        </Routes>
        <Footer/>
        </Router> 
        </div>
  );
}

export default App;
