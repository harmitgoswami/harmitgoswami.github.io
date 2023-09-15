import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import {Home, Personal, Resume, Projects} from "./pages/";

function App() {
  return (
    <div >
      <Router>
        <Routes>
        
          <Route path={"/personal"} element={<Personal />} />
          <Route path={"/resume"} element={<Resume />} />
          <Route path={"/projects"} element={<Projects />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
