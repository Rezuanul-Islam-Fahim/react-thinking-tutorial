import { useState } from "react";
import SearchPanel from "./SearchPanel";
import ProductTablePanel from "./ProductTablePanel";

const App = () => {
  const [filterText, setFilterText] = useState('');
  const [onlyStock, setOnlyStock] = useState(false);
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

  return (
    <>
      <SearchPanel
        filterText={filterText}
        onChangeFilterText={setFilterText}
        onlyStock={onlyStock}
        onChangeOnlyStock={setOnlyStock} />
      <ProductTablePanel
        products={PRODUCTS}
        filterText={filterText}
        onlyStock={onlyStock} />
    </>
  );
}

export default App;