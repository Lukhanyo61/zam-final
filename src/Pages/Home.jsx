import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  
} from 'mdb-react-ui-kit';
import Cards from "../Components/Cards/Card";
import Counter from "../Components/Counter/Counter";
import CardV from "../Components/CardV/CardV";
import Footer from "../Components/Footer/Footer";
function Home() {
  return (
    <div>
   
    <MDBCarousel showIndicators showControls fade>
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={1}
      src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
      alt='...'
    >
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 d-block'
      itemId={2}
      src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
      alt='...'
    >
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 d-block'
      itemId={3}
      src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
      alt='...'
    >
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </MDBCarouselItem>
  </MDBCarousel>
  <h1  id="payit" className="text-center">Paying it forward</h1>
  <Cards />
  <Counter />
  <CardV />
  <Footer />

</div>
  

  );
}

export default Home;