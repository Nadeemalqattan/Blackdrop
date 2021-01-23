import { GlobalStyle } from "./styles";

import HomePage from "./components/Home";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <div>
      <GlobalStyle />
      <HomePage />
      <ProductList />
    </div>
  );
}

export default App;
