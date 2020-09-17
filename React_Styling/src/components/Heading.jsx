import React from "react";

const date = new Date();
//console.log(date.getHours());
const hour = date.getHours();

let greet;
const customStyle = {
  color: ""
};
if (hour < 12) {
  greet = "Good morning";
  customStyle.color = "red";
} else if (hour >= 18) {
  greet = "Good evening";
  customStyle.color = "green";
} else {
  greet = "Good aftenoon";
  customStyle.color = "blue";
}

function Heading() {
  return (
    <h1 className="heading" style={customStyle}>
      {greet}
    </h1>
  );
}

export default Heading;
