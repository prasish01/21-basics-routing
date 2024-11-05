import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  const id = params.productId;

  return (
    <>
      <h1>Product Details</h1>
      <p>{id}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
