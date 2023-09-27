import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Explore from "./Components/Explore";
import SignUp from "./Components/SignUp";
import Matches from "./Components/Matches";
import "./styles.scss";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Matches" element={<Matches />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Matches" element={<Matches />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
