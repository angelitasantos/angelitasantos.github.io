import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SectionPlaceholder from './pages/SectionPlaceholder/SectionPlaceholder';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:sectionId' element={<SectionPlaceholder />} />
      <Route path='/projetos' element={<Projects />} />
      <Route path='/academica' element={<Education />} />
    </Routes>
  );
}

export default App;
