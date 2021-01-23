import "../App.css";
const ProductItem = (props) => {
  const product = props.product;
  return (
    <div className="App">
      <h4>{product.name}</h4>
      <img src={product.image} alt={product.name} />
      <p>Price: {product.price} BD</p>
    </div>
  );
};

export default ProductItem;
