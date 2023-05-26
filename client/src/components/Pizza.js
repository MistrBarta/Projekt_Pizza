import React from "react";

const Pizza = (props) => {
    return (
      <>
        <p className="pizza-name">{props.name}</p>
        <p className="pizza-desc">{props.desc}</p>
      </>
    )
  }
  
  export default Pizza;