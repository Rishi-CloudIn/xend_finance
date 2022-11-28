
import './App.css';
import HomeApp from './AppsContainer/HomeApp';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import TechBHome from './Components/TechnologyBusinessComponent/TechBHome/TechBHome';
function App ()
{
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/TechBusiness" element={<TechBHome />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
