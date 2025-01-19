import './App.css';
import Card from './components/cars/Card';
import Companylogo from './components/Companylogo';
import Expert from './components/expert/Expert';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Hero2 from './components/hero2/Hero2';
import Nav from './components/nav/Nav';
import Service from './components/service/Service';
import Testi from './components/testimonials/Testi';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Companylogo/>
      <Expert/>
      <Service/>
      <Testi/>
      <Hero2/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
