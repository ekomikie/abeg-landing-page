import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import ColumnCards from './components/ColumnCards/Column';
import WavyBackground from './components/wavybackground/WavyBackground';
import Mainlinks from './components/mainlinks/Mainlinks';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className='App'>
      <Hero />
      <ColumnCards />
      <WavyBackground />
      <Mainlinks />
      <Footer />
    </div>
  );
}

export default App;
