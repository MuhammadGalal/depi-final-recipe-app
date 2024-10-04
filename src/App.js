import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/customNavbar';
import MainContent from './components/mainContent';
import LoginPage from './pages/LoginPage';
import CreateAccount from './pages/CreateAcountPage';
import Footer from './components/footer';
import MomenPage from './components/MomenPage';
import GalalPage from './components/GalalPage';
import AhmedPage from './components/AhmedPage';
import MedanyPage from './components/MedanyPage';
import SalahPage from './components/SalahPage';
import HossamPage from './components/HossamPage';



function App() {
  return (
    <>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/momenpage' element={<MomenPage />} />
          <Route path='/galalpage' element={<GalalPage />} />
          <Route path='/ahmedpage' element={<AhmedPage />} />
          <Route path='/medanypage' element={<MedanyPage />} />
          <Route path='/salahpage' element={<SalahPage />} />
          <Route path='/hossampage' element={<HossamPage />} />
        </Routes>
        <Footer /> {/*salah update*/}
      </Router>
    </>
  );
}

export default App;
