import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home.tsx'
import Donation from './pages/Donation/Donation.tsx'
import NotFound from './pages/NotFound/NotFound.tsx';
import modalFuncs from './pages/ModalTest/ModalTest.tsx';
import Share from './pages/ShareToSocialMedia/ShareToSocialMedia.tsx';


function Router() {
    return (
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/donation" element={<Donation />} />
            <Route element={<NotFound />} />
            <Route path="/ModalTest" element={<modalFuncs.ResultsModal />} />
            <Route path="/share" element={<Share />} />
      </Routes>
    );
  }
  
  export default Router;