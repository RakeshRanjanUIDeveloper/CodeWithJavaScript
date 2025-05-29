import { createContext, useEffect, useState } from "react";

//Create Context
export const ProductContext = createContext();

//Create Provider Component
export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);

  useEffect(() => {
    const fetchCategoriesList = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategoriesList(data);
    };
    fetchCategoriesList();
  }, []);

  useEffect(() => {
    const fetchProductData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductList(data);
    };
    fetchProductData();
  }, []);

  const handleSearch = (searchText) => {
    const filteredProducts = productList.filter((p) =>
      p.title.toLowerCase().includes(searchText)
    );
    setFilteredProducts(filteredProducts);
  };

  const handleCategoryChange = (c) => {
    let category = c.target.value;
    const updatedCheckbox = selectedCheckbox.includes(category)
      ? selectedCheckbox.filter((c) => c !== category)
      : [...selectedCheckbox, category];
    setSelectedCheckbox(updatedCheckbox);

    setFilteredProducts(
      updatedCheckbox.length === 0
        ? productList
        : productList.filter((p) => updatedCheckbox.includes(p.category))
    );
  };

  const handlePriceChange = ({ min, max }) => {
    const minVal = parseFloat(min) || 0;
    const maxVal = parseFloat(max) || Infinity;

    const filtered = productList.filter(
      (p) => p.price >= minVal && p.price <= maxVal
    );

    setFilteredProducts(filtered);
  };
  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        handleSearch,
        filteredProducts,
        setFilteredProducts,
        categoriesList,
        handleCategoryChange,
        selectedCheckbox,
        handlePriceChange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
