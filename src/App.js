import './App.css';
import { Home } from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterJoinUs } from './RegisterJoinUs/RegisterJoinUs';
import { NavbarSection } from './Navbar/Navbar';
import { Fullteam } from './Fullteam/Fullteam';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarSection />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<RegisterJoinUs />} />
          <Route path='/fullteam' element={<Fullteam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
