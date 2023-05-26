import React from "react";
import "../Styles/Hero.css";
import { Link } from "react-router-dom";


 function Hero(){
    return(
        <div className="hero-content-page">
            <div className="hero-content">
              <h3>The best pizza you can get</h3>
              <Link to='Orders'><button className="hero-btn-order">Objednat Online</button></Link>
            </div>
        </div>
    )
}

export default Hero;