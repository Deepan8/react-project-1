import React from "react";
import "../main-content/middle_content.css"

// import image1 from "../src/images/porch-car.jpg"
function Content(props) {
    return (
     <>
      <div className="image">
        <img src={props.img}/>
      </div>
      <div className="tittle">
      <p >{props.title}</p>
    </div>
      <div className="text">
      <p >{props.content}</p>
    </div>
    <div className="tittle">
      <p >{props.prescription}</p>
    </div>
    <div className="text">
      <p >{props.offer}</p>
    </div>
    </>   
       

   );
}
export default Content;