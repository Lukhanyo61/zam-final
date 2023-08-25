import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  
  Home,
  About,
  Contact,
  Beneficiary,
  
} from "./Pages";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Beneficiary" element={<Beneficiary />}>
        
      </Route>
    </Routes>
  
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();