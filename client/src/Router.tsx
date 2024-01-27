import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Donation from "./pages/Donation/Donation.tsx";
import AdminLogin from "./pages/AdminLogin/AdminLogin.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import ImpactCarousel from "./components/ImpactCarousel/ImpactCarousel.tsx";
import PDFSave from "./pages/PDFSave/PDFSave.tsx";

import ImpactCards from "./pages/ImpactCards/ImpactCards.tsx";
import donationImpact from "./assets/donation.jpeg";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donations" element={<Donation />} />
      {/* display the impact carousel object on a separate page (route there) */}
      <Route path="/adminlogin" element={<AdminLogin />} />
      {/* <Route path="/carousel" element={<ImpactCarousel />} /> */}
      <Route element={<NotFound />} />
      <Route path="/pdf" element={<PDFSave />} />
    </Routes>
  );
}

export default Router;
// i want to include this card next to the other card
