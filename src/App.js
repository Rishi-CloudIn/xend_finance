
import './App.css';
import HomeApp from './AppsContainer/HomeApp';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import TechBusApp from './AppsContainer/TechBusApp';
import TechTokenApp from './AppsContainer/TechTokenApp';
import NewsApp from './AppsContainer/NewsApp';
import 'animate.css';
import ScrollToTop from './ScrollToTop';

function App ()
{
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="/Business" element={<TechBusApp />} />
          <Route path="/XentToken" element={<TechTokenApp />} />
          <Route path="/News_And_Announcements" element={<NewsApp />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
