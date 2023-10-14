import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home.tsx'
import Donation from './pages/Donation/Donation.tsx'
import NotFound from './pages/NotFound/NotFound.tsx';
import ModalTest from './pages/ModalTest/ModalTest.tsx';


function Router() {
    return (
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/donation" element={<Donation />} />
            <Route element={<NotFound />} />
            <Route path="/ModalTest" element={<ModalTest />} />
      </Routes>
    );
  }
  
  export default Router;