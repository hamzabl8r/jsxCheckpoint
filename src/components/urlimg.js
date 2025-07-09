import React from "react";
import { product } from "../product";

export default function urlimg(){
    return (
        <div className="img-container">
            <img src={product.url} className="img" alt={product.name} />
        </div>
    )
}