import React from "react";
import { product } from "../product";

export default function Price() {
  return (
    <div className="card-price">
      <h2>{product.price} DT</h2>
    </div>
  );
}