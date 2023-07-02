import './App.css';
import { Home } from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterJoinUs } from './RegisterJoinUs/RegisterJoinUs';
import { NavbarSection } from './Navbar/Navbar';
import { Fullteam } from './Fullteam/Fullteam';
import { Footer } from './Footer/Footer';
import { FullAboutUs } from './FullAboutUs/FullAboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarSection />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<RegisterJoinUs />} />
          <Route path='/fullteam' element={<Fullteam />} />
          <Route path='/fullaboutus' element={<FullAboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
