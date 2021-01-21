import products from "../products";

const HomeProductItem = () => {
  const productItem = products.map((product) => {
    return (
      <div>
        <h4>{product.name}</h4>
        <img src={product.image} />
        <p>Price: {product.price} BD</p>
      </div>
    );
  });
  return <div>{productItem}</div>;
};

export default HomeProductItem;
