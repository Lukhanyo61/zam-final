
import React from "react";

import Footer from '../Components/Footer/Footer';


  
function Contact() {
   
  return (
    <div>
   
  

  <div class="container contact-form">
    <div class="contact-image">
   
    </div>
    <form method="post">
        <h3>Drop Us a Message</h3>
       <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="Your Name" />
                </div>
                <div class="form-group">
                    <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="Your Email" />
                </div>
                <div class="form-group">
                    <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="Your Mobile Number" />
                </div>
                <div class="form-group">
                    <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <textarea id="text-area" name="txtMsg" class="form-control" placeholder="Your Message *" ></textarea>
                </div>
            </div>
        </div>
    </form>
</div> 
<Footer />
    </div>
   
    

  );
}

export default Contact;