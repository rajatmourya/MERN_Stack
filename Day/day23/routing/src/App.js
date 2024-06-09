import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import FreePricing from "./pages/Pricing/FreePricing";
import PremiumPrice from "./pages/Pricing/PremiumPrice";
import BasicPricing from "./pages/Pricing/BasicPricing";
import ProtectedRoute from "./pages/ProtectedRoute";
import ForPremiumUsers from "./pages/ForPremiumUsers";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/pricing" element={<Pricing />}>
          <Route path="free" element={<FreePricing />} />
          <Route path="premium" element={<PremiumPrice />} />
          <Route path="basic" element={<BasicPricing />} />
        </Route>

        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/user/:userId/:projectId" element={<Project />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/prime" element={<ForPremiumUsers />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
