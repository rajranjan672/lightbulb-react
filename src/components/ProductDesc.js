import React from "react";
// import "@fontsource/jost";
import "../components/product.css"


export default function ProductDesc(props) {
  return (
    <div className="Description">
      <h1 className="Heading"> {props.productHeading} </h1>
      <p className="Desc"> {props.productDescription} </p>
    </div>
  );
}
