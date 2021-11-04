import "./Card.css";
import React, { useState } from "react"

const Card = ({ name }) => {

  const [Name, setName] = useState(name);
  const [counter, setCounter] = useState(10)

  function showAlert() {
    setName("mahdi");
  }


  function increase() {

      setCounter(counter + 1);
    
  }

  function decrease() {
        
    if (counter>=1){
      setCounter(counter - 1);
    }

  }

  return (
    <div className="card">
      <h1 onClick={showAlert}>{Name}</h1>
      <h3 >{counter}</h3>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
};

export default Card;
