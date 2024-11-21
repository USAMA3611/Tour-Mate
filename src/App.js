import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import About from './Pages/About'; 



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/gallery" element={ <Gallery/>}></Route>
        <Route path="/contact" element={ <Contact/>}></Route>
        <Route path="/about" element={ <About/>}></Route>
      </Routes>
      <Footer/> 
      
      </BrowserRouter>
   
     
    
    </div>
  );
}  

export default App;
