
import React from "react" ;
import Navbar from "./header-components/navbar" ;
import Content from "./main-content/middle_content";
import Footer from "./Footer-content/Footer";


import image1 from "../src/images/the-car-spa1.jpg"

import image2 from "../src/images/porch-car.jpg"

import image3 from "../src/images/soap.jpg"

let Obje =[{
   img:image1,
   title:"FULL SERVICE CAR WASH:",
   content:"we provide cleaning and vacuuming to make your car squeaky shiny and dustless.",
   prescription:"UNLIMITED CAR WASH:",
   offer:"Join our Unlimited Car Wash Club and enjoy great savings plus extra discounts on upgraded wash, detail, and oil change. Take 25% OFF your 1st month today!",
   
 },{
     img:image2,
     title:"DETAIL SERVICE:",
     content:"Polish, Carpet Deep Cleanse, Seat Treatment and give your car a stand-out style!",
     prescription:"OIL CHANGE SERVICE:",
     offer:"Our Express Oil Change Centers perform excellent services in 15 minutes or less.",
 },{
     img:image3,
     title:"EXTERIOR CAR WASH:",
     content:"Great quality soft cloth tunnel wash with spotless rinse at an affordable price.",
     prescription:"VEHICLE STATE INSPECTION:",
     offer:"State Inspection,Safety Checks,No- Appointments Needed,Done in 15 mins or less",
 }]

function App ( ) {
 return (
    <div>
         <Navbar/>
         <div className="name">
         <h1 className="head">THE CAR SPA</h1>
         <p className="header-txt">Clean and Pleasent car spa</p>
            <p className="green-txt">Made for your car and for your wellness</p>
         </div>
          
         <div className="three">
         {
    Obje.map((a,i)=>(
      <Content key={i} img={a.img}  title={a.title} content={a.content} prescription={a.prescription} offer={a.offer}/>
    )
     
    )}</div>
         <Footer/>
    </div >
   
 ) ;
}

export default App ;




