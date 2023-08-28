import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


export default function CardV() {
  return (
    <MDBCard className='CardV' style={{ maxWidth: '1240px'  }}>
      <MDBRow id='CardV' className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/357134126_578184377852140_3371118207222525247_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MYNiCNSTf_8AX8qLkFt&_nc_ht=scontent-cpt1-1.xx&oh=00_AfBgiqNiF1JXSPDk3q8I8F8sInMz1fyhhu0iUYVUZoW9QA&oe=64F15FC2' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody id='cBody'>
            <MDBCardTitle> Our latest star!</MDBCardTitle>
            <MDBCardText id='cText'>
           The foundation congratulates Noloyiso Madolo, 2019 beneficiary, on obtaining her code 10 drivers license. Her story is inspirational because after obtaining her learners license thru ZAM Foundation she didn’t sit around waiting for a handout. Instead she hustled and managed to pay for her own driving lessons. Against all odds she made it. A true story of self-reliance. No handouts, just hand ups. Well done Noloyiso.
            </MDBCardText>
            <MDBCardText>
              
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}