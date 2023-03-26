// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experiences from './components/Experiences';
import Technologies from './components/Technologies';
// get the image
import crystal_one from './assets/crystal_one.png';
import { useRef } from 'react';
function App() {
  const aboutMeRef = useRef();
  const footerRef = useRef();
  const experiencesRef = useRef();
  const projectsRef = useRef();
  const onClickAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const onClickFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const onClickExperiences = () => {
    experiencesRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const onClickProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="App">
      <div className="Main">
        <div className="Hero">
          <div className="HeroGroup">
            <NavBar onClickAboutMe={onClickAboutMe} onClickFooter={onClickFooter} onClickExperiences={onClickExperiences} onClickProjects={onClickProjects} />
            <Hero />
          </div>
          {/* put image here */}
          <img className="crystal-one" src={crystal_one} alt="crystal one" />
        </div>
        <div className="Remaining">
          <AboutMe aboutMeRef={aboutMeRef} />
          <Technologies />
          <Experiences experiencesRef={experiencesRef} />
          <Projects projectsRef={projectsRef} />
          <Footer footerRef={footerRef} />
        </div>

      </div>

    </div>
  );
}

export default App;
