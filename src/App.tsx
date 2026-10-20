import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SectionPlaceholder from './pages/SectionPlaceholder/SectionPlaceholder';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import ProtectedRoute from './components/ProtectedRoute';
import Professional from './pages/Professional/Professional';
import ProfessionalDetails from './pages/Professional/ProfessionalDetails';
import ProfessionalLogin from './pages/Professional/ProfessionalLogin';
import Family from './pages/Family/Family';
import Hobbies from './pages/Hobbies/Hobbies';
import Contact from './pages/Contact/Contact';
import Literature from './pages/Literature/Literature';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:sectionId' element={<SectionPlaceholder />} />
      <Route path='/projetos' element={<Projects />} />
      <Route path='/academica' element={<Education />} />
      <Route path='/profissional' element={<Professional />} />
      <Route path='/profissional/acesso' element={<ProfessionalLogin />} />
      <Route path='/profissional/detalhes'
        element={
          <ProtectedRoute>
            <ProfessionalDetails />
          </ProtectedRoute>
        }
      />
      <Route path='/familia' element={<Family />} />
      <Route path='/hobbies' element={<Hobbies />} />
      <Route path='/contato' element={<Contact />} />
      <Route path='/literatura' element={<Literature />} />
    </Routes>
  );
}

export default App;
