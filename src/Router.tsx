import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Donation from "./pages/Donation/Donation.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import UploadCsv from "./pages/UnitedEmployee/UploadCsv.tsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/upload" element={<UploadCsv />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default Router;
