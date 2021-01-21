import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const productList = products.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });
  return <div>{productList}</div>;
};

export default ProductList;
