
import './App.css';
import Community from './Components/Community/community';
import Features from './Components/Features/Features';
import GetStart from './Components/GetStart/GetStart';
import Home from './Components/Home/Home';
import Journey from './Components/Journey/Journey';
import Token from './Components/Token/Token';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function App ()
{
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Token />
      <Features />
      <Journey />
      <Community />
      <GetStart />
      <Footer />
    </div>
  );
}

export default App;
