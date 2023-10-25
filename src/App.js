import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scss/_general.scss';

import First from './First';
import Second from './Second';
import Third from './Third';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <First />
      <Second />
      <Third />
    </main>
  );
}

export default App;
