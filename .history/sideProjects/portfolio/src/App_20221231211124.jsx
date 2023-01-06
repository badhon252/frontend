// import Header from "./Components/Header/Header"
import './App.css';
import About from './Components/pages/About';
// import Footer from './Components/pages/Footer';
import Home from './Components/pages/Home';
import { Router } from "@reach/router";
import Contact from './Components/pages/Contact';

function App() {
  return (
    <div>

      <Router>
       <Home path="/"/>
       <About path="about" />
       <Contact path="contact" />
      </Router>
    </div>
  );
}

export default App;
