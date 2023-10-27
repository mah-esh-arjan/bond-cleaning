import TrackVisibility from 'react-on-screen';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './scss/_general.scss';

import First from './First';
import Second from './Second';
import Header from './components/Header';
import Services from './views/Services';
import HowItWorks from './views/HowItWorks';
import Faq from './views/Faq';
import Projects from './views/Projects';

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
      <Faq />
      <Projects />
    </main>
  );
}

export default App;
