import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Testimonial from './components/testimonials/Testimonial.jsx'
import Footer from './components/footer/footer.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
