import { createContext, useEffect, useState } from "react";

//Create Context
export const ProductContext = createContext();

//Create Provider Component
export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const [categoriesList, setCategoriesList] = useState([]);
  
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

   const handleCategoryChange = (category) =>{
    const filteredProducts = productList.filter((c) => c.category === category);
    setFilteredProducts(filteredProducts)
 }

  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        handleSearch,
        filteredProducts,
        setFilteredProducts,
        categoriesList,
        handleCategoryChange
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
