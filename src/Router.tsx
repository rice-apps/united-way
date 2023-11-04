import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home.tsx'
import Donation from './pages/Donation/Donation.tsx'
import ImpactCarousel from "./components/ImpactCarousel/ImpactCarousel"
import NotFound from './pages/NotFound/NotFound.tsx';
import PDFSave from './pages/PDFSave/PDFSave.tsx';

import ImpactCards from './pages/ImpactCards/ImpactCards.tsx';
import donationImpact from "./assets/donation.jpeg";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

function Router() {
    return (
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/donation" element={<Donation />} />
            
            {/* display the impact carousel object on a separate page (route there) */}
            <Route path="/carousel" element={<ImpactCarousel/>} />
            <Route element={<NotFound />} />
            <Route path="/pdf" element={<PDFSave />} />
            <Route path="/impact-cards" element = {
              <>
                <ImpactCards imgURL = {donationImpact} numData = {1213} unitText = {"families"} descText= {"got support to achieve financial statbility"}/>
                <ImpactCards imgURL = {img1} numData = {452} unitText = {"young people"} descText= {"helped to succeed in school and in life"}/>
                <ImpactCards imgURL = {img2} numData = {1452} unitText = {" people"} descText= {"recieved physical and behavioral health card support"}/>
              </>
            }/>
      </Routes>
    );
  }
  
  export default Router;
  // i want to include this card next to the other card
  