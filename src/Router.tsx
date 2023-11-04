import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home.tsx'
import Donation from './pages/Donation/Donation.tsx'
import ImpactCarousel from "./components/ImpactCarousel/ImpactCarousel"
import NotFound from './pages/NotFound/NotFound.tsx';


function Router() {
    return (
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/donation" element={<Donation />} />
            
            {/* display the impact carousel object on a separate page (route there) */}
            <Route path="/carousel" element={<ImpactCarousel/>} />
            <Route element={<NotFound />} />
      </Routes>
    );
  }
  
  export default Router;