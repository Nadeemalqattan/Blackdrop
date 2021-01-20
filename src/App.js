import logo from "./blackdrop.jpg";
import "./App.css";
import products from "./products";

function App() {
  const productlist = products.map((product) => {
    return (
      <div>
        <h4>{product.name}</h4>
        <img src={product.image} />
        <p>Price: {product.price}</p>
      </div>
    );
  });
  return (
    <div className="App">
      <h1>Black Drop</h1>
      <h3>Where you find the best drops of cofee</h3>
      <img src={logo} alt="Logo" />;<div>{productlist}</div>
    </div>
  );
}

export default App;
