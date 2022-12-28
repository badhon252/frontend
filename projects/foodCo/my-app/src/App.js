// import logo from './logo.svg';
import './scss/style.css'
import Header from './Components/Header/Header'
import Vouchers from './Components/Vouchers/Vouchers';
import Feature from './Components/Feature/Feature';
import Pricing from './Components/Pricing/Pricing';
import Blog from './Components/Blog/Blog';
import AppLink from './Components/Download_link/AppLink';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Vouchers/>
      <Feature/>
      <Pricing/>
      <Blog/>
      <AppLink/>
      <Footer/>

    </div>
  );
}

export default App;
