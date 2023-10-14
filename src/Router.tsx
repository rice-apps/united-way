import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home.tsx'
import Donation from './pages/Donation/Donation.tsx'
import AboutUs from './pages/AboutUs/AboutUs.tsx'
import NotFound from './pages/NotFound/NotFound.tsx';


function Router() {
    return (
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route element={<NotFound />} />
      </Routes>
    );
  }
  
  export default Router;