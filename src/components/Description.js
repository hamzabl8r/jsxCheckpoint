import {product} from "../product";
export default function Description() {
  return (
    <div className="card-description">
      <p>{product.description}</p>
    </div>
  );
}