
import './App.css';
import Features from './Components/Features/Features';
import Home from './Components/Home/Home';
import Token from './Components/Token/Token';
import Navbar from './Navbar/Navbar';

function App ()
{
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Token />
      <Features />
    </div>
  );
}

export default App;
