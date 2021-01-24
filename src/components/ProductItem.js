import { ListWrapper, ProductName, ProductPrice, ShopImage } from "../styles";
const ProductItem = (props) => {
  const product = props.product;
  return (
    <ListWrapper>
      <ProductName>{product.name}</ProductName>
      <ShopImage src={product.image} alt={product.name} />
      <ProductPrice>Price: {product.price} BD</ProductPrice>
    </ListWrapper>
  );
};

export default ProductItem;
