import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import {Home, Personal, Resume, Projects} from "./pages/";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />

          <Route path={"/personal"} element={<Personal />} />
          <Route path={"/resume"} element={<Resume />} />
          <Route path={"/projects"} element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
