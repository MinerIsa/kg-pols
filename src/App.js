
import './App.css';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about'
import Courses from './pages/courses';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import '/Users/abc/Desktop/WebDev/kg-pols/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Girl from './components/Cards/assets/girl.jpg';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/kg-pols' exact element={<Home />} />
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/annual' element={<AnnualReport />} />
        <Route path='/team' element={<Teams />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
