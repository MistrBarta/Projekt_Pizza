import "../Styles/Map.css";
import React from "react";

 function Map(){
  return(
    <div className="map-div">
    <iframe title="myFrame" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.8492557746704!2d14.907568676501045!3d50.425280171587445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470955b445901225%3A0xe9d9599e1198a174!2zSGF2bMOtxI1rb3ZhLCAyOTMgMDEgTWxhZMOhIEJvbGVzbGF2!5e0!3m2!1scs!2scz!4v1685013416077!5m2!1scs!2scz" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}
export default Map;