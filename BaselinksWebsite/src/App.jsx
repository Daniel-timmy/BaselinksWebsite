import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components
import Homepage from "./pages/Homepage";
import WhoWeAre from "./pages/WhoWeAre";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
      </Routes>
    </Router>
  );
}

export default App;
