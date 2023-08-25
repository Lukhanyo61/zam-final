
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  
  MDBCollapse
} from 'mdb-react-ui-kit';
import companyLogo from '../Images/logo.png';
function Navigation() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="navigation">
      

      <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img width={"90px"} src={companyLogo} alt="Zam-Logo"/></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav style={{margin:"36%"}}>
            <MDBNavbarItem id="nav-item">
              <NavLink id="nav-i" active aria-current='page' to="/home">
                Home
              </NavLink>
            </MDBNavbarItem>&nbsp;&nbsp;&nbsp;&nbsp;
            <MDBNavbarItem>
              <NavLink id="nav-i"  to="/about">About</NavLink>
            </MDBNavbarItem>&nbsp;&nbsp;&nbsp;&nbsp;
            <MDBNavbarItem>
              <NavLink id="nav-i"  to="/beneficiary">Beneficiary</NavLink>
            </MDBNavbarItem>&nbsp;&nbsp;&nbsp;&nbsp;
            <MDBNavbarItem>
              <NavLink id="nav-i"  to="/contact" >
               Contact
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  );
}

export default Navigation;