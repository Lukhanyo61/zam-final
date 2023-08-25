import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  
  
  Home,
  About,
  Contact,
  Beneficiary,
  
} from "../src/Pages";
import  Navigation  from "../src/Components/Navigation/Navigation";

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
