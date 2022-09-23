import React from "react";

import image1 from "../images/the-car-spa.jpg"
import "../Footer-content/Footer.css"
function Footer(props) {
    return (
        <div class="blk-container">
        <div class="blk-border">
          <div class="blk-wit-logo">
            <div class="foot-logo">
              <img src={image1} alt="footer-images"/> 
            </div>
            <div class="your-natural">
              <p>Made for your car and for your wellness.</p>
            </div>
          </div>
          <div class="info">
  
            <ul class="disco">
              <li>email</li>
              <li>thecarspa@gmail.com</li>
            
            </ul>
  
            <ul class="abou">
              <li>contact</li>
              <li>91+9999443443</li>
              
  
            </ul>
            <ul class="inf">
              <li>location</li>
              <li>4835 Lyndon B Johnson</li>
              <li>Fwy, Suite 650 Farmer's</li>
              <li>Branch, TX 75244</li>
              
  
            </ul>
  
          </div>
  
        </div>
      </div>
    );
}


export default Footer;