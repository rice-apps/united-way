import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home.tsx'
import Donation from './pages/Donation/Donation.tsx'
import NotFound from './pages/NotFound/NotFound.tsx';
import ImpactCards from './pages/ImpactCards/ImpactCards.tsx';

function Router() {
    return (
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/donation" element={<Donation />} />
            <Route element={<NotFound />} />
            <Route path="/impact-cards" element={<ImpactCards />} />
      </Routes>
    );
  }
  
  export default Router;