import products from "../products";

const ProductItem = (props) => {
  const product = props.product;
  return (
    <div>
      <h4>{product.name}</h4>
      <img src={product.image} />
      <p>Price: {product.price} BD</p>
    </div>
  );
};

export default ProductItem;
