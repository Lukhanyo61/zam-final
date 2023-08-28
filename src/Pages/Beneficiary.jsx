import React from "react";
import Banner from "../Components/Banner.jsx/Banner";
import Footer from "../Components/Footer/Footer";
import Nominate from "../Components/Nominate/Nominate";
import Testimonial from "../Components/Testimonial/Testimonial";
import Testimonialslider from "../Components/Testimonialslider.jsx/Testimonialslider";


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