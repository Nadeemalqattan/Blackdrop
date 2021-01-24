import { ListWrapper, ProductName, ProductPrice } from "../styles";
const ProductItem = (props) => {
  const product = props.product;
  return (
    <ListWrapper>
      <ProductName>{product.name}</ProductName>
      <img src={product.image} alt={product.name} />
      <ProductPrice>Price: {product.price} BD</ProductPrice>
    </ListWrapper>
  );
};

export default ProductItem;
