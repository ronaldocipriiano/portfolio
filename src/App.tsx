import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Projetos from './Components/Projects';
import Header from './Components/Header';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <Projetos />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
