import './App.css';
import { Home } from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterJoinUs } from './RegisterJoinUs/RegisterJoinUs';
import { NavbarSection } from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarSection />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<RegisterJoinUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
