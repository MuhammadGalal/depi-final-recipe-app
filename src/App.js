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
import FavoritesPage from './pages/FavoritesPage';
import Breakfast from './pages/Breakfast';
import Lunch from './pages/Lunch';
import ProfilePage from './pages/ProfilePage';
import { UserProvider } from './context/UserContext';



function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/breakfast' element={<Breakfast />} />
          <Route path='/lunch' element={<Lunch />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path='/favorites' element={<FavoritesPage />} /> {/*Mo'men update*/}
          <Route path='/momenpage' element={<MomenPage />} /> {/*Mo'men update*/}
          <Route path='/galalpage' element={<GalalPage />} /> {/*Mo'men update*/}
          <Route path='/ahmedpage' element={<AhmedPage />} /> {/*Mo'men update*/}
          <Route path='/medanypage' element={<MedanyPage />} /> {/*Mo'men update*/}
          <Route path='/salahpage' element={<SalahPage />} /> {/*Mo'men update*/}
          <Route path='/hossampage' element={<HossamPage />} /> {/*Mo'men update*/}
        </Routes>
        <Footer /> {/* salah update */}
      </Router>
      </UserProvider>
    </>
  );
}

export default App;
