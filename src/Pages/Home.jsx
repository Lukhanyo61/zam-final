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
   
    <MDBCarousel id='slide1'   showIndicators showControls fade>
    <MDBCarouselItem 
     
      className='w-100 d-block'
      itemId={1}
      src='http://zamfoundation.co.za/wp-content/uploads/2021/05/Zam-header-main.jpg'
      alt='...'
      style={{height:"750px"}}
    >
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 d-block'
      itemId={2}
      src='https://scontent-cpt1-1.xx.fbcdn.net/v/t1.6435-9/65698851_628365534330760_7561197939293421568_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ZYAnQfPlzYkAX8FCM1w&_nc_ht=scontent-cpt1-1.xx&oh=00_AfBmL6WuHtKddTceRJv2YprS2CazDzrP_AOENriaYXFGhw&oe=6513B632'
      alt='...'
      style={{height:"750px"}}
    >
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 d-block'
      itemId={3}
      src='https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/236472697_1173269429840365_4990602478022630949_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LB20U_B-_FoAX8ndT20&_nc_ht=scontent-cpt1-1.xx&oh=00_AfBERRVjZtrtyirTHbsRjcEG25nGsv5cxLf1fq25cBCQtg&oe=64F22CC9'
      alt='...'
      style={{height:"750px"}}
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