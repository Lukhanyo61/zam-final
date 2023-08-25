import React from "react";
import Banner from "../Components/Banner.jsx/Banner";
import Footer from "../Components/Footer/Footer";
import Nominate from "../Components/Nominate/Nominate";
import Testimonial from "../Components/Testimonial/Testimonial";


function Beneficiary() {
  return (
    <div className="home">
        
   <Banner />
    <Testimonial />
    <Nominate />
    <br></br>
   <Footer />

    </div>
  );
}

export default Beneficiary;