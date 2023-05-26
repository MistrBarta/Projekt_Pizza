import "../Styles/Home.css"
import React from "react";
import Hero from "./Hero";
import Map from "./Map";


 function Home(){
    return(
    <div>
        <Hero/>
      <div className="home-info">
        <h1>Informace</h1> 
        <li>Najdete nás v Mladé Boleslavi, Havlíčkova 378</li>   
        <li>Obal na pizzu stojí 20Kč</li> 
        <li>Rozvoz do okolních vesnic je zdarma, ostatní 8 Kč/km</li> 
        <li>Letní zahrádka s grilem, ohništěm a hracími prvky pro děti</li> 
        <li>Možnost parkování</li>
      </div>
      <div className="home-map">
        <Map/>
      </div>
    </div>
    )
}

export default Home;