import React from "react";
import { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className="Product">
      <img src={props.image} />
      <div className="Product-description">
        <span className="Product-title">Position - {props.name}</span>
        <span className="Product-title">Salary - {props.price} </span>
        <span className="Product-title">Openings - {props.available}</span>
        <span className="Product-price">Team - {props.vendor}</span>
      </div>
      <button className="btn1">
        <Link to="/form">Apply</Link>
      </button>
    </div>
  );
}

export default Product;
