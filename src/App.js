import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experiences from './components/Experiences';
// get the image
import crystal_one from './assets/crystal_one.png';
function App() {
  return (
    <div className="App">
      <div className="Main">
        <div className="Hero">
          <div className="HeroGroup">
            <NavBar />
            <Hero />
          </div>
          {/* put image here */}
          <img className="crystal-one" src={crystal_one} />
        </div>
        <div className="Remaining">
          <AboutMe />
          <Experiences />
          <Projects />
          <Footer />
        </div>

      </div>

    </div>
  );
}

export default App;
