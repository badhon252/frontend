// import Header from "./Components/Header/Header"
import './App.css';
import About from './Components/pages/About';
// import Footer from './Components/pages/Footer';
import Home from './Components/pages/Home';
import { Router } from "@reach/router";

function App() {
  return (
      <Router>
       <Home path="/"/>
       <About path="/about" />
       
    </Router>
  );
}

export default App;
