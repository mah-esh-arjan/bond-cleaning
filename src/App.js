import TrackVisibility from 'react-on-screen';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import './scss/_general.scss';

import First from './First';
import Second from './Second';
import Header from './components/Header';
import Services from './views/Services';
import HowItWorks from './views/HowItWorks';
import Faq from './views/Faq';
import Projects from './views/Projects';
import Testimonials from './views/Testimonials';

function App() {
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
      <TrackVisibility once offset={400}>
        <Faq />
      </TrackVisibility>
      <Testimonials />
    </main>
  );
}

export default App;
