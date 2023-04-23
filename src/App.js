import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/pages/Home'
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className='App'> 
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/zavasiotdom' element={<Foryourhome/>}/>
          <Route path='/zabiznis' element={<Foryourbusiness/>}/>
          <Route path='/produkti' element={<Products/>}/>
          <Route path='/proekti' element={<Projects/>}/> */}
          <Route path='/zanas' element={<About/>}/>
          <Route path='/kontakt' element={<Contact/>}/>
        </Routes>
        <Footer/>
        </div>
    </Router>
    
    
  );
}

export default App;
