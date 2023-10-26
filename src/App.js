import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scss/_general.scss';

import First from './First';
import Second from './Second';
import Header from './components/Header';
import Services from './views/Services';
import HowItWorks from './views/HowItWorks';

function App() {
  return (
    <main>
      <Header />
      <First />
      <Second />
      {/* <Third /> */}
      <Services />
      <HowItWorks />
    </main>
  );
}

export default App;
