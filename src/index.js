import React from "react";
import ReactDOM from "react-dom";

const fName = "Ale";
const lName = "Ilias";
const luckyNumber = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
