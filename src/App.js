import TrackVisibility from 'react-on-screen';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import './scss/_general.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import First from './First';
import Second from './Second';
import Header from './components/Header';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Services from './views/Services';
import HowItWorks from './views/HowItWorks';
import Faq from './views/Faq';
import Projects from './views/Projects';
import Testimonials from './views/Testimonials';
import About from './views/about-us/about'

function Home() {
  return (
    <main>
      <Header />
      <First />
      <Second />
      {/* <Third /> */}
      <Services />
      <TrackVisibility once offset={200}>
        <HowItWorks />
      </TrackVisibility>
      <Projects />
      <TrackVisibility once offset={200}>
        <Faq />
      </TrackVisibility>
      <Testimonials />
      <Footer />
      <Copyright />

    </main>
  )
}

function AboutUs() {
  return (
    <main>
      <Header />
      <Second />
    </main>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>



  );
}

export default App;
