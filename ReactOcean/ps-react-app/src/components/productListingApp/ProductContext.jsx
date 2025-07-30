import { createContext, useEffect, useState } from "react";
import useFetch from "../productListingApp/useFetch";
import Loading from "../productListingApp/Loading";
import Error from "../productListingApp/Error";

//Create Context
export const ProductContext = createContext();

//Create Provider Component
export const ProductProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [productList, setProductList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  const {
    data: productData,
    isLoading: productsLoading,
    error: productsError,
    success: productsSuccess,
  } = useFetch({ url: "https://fakestoreapi.com/products" });
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    error: categoriesError,
    success: categoriesSuccess,
  } = useFetch({ url: "https://fakestoreapi.com/products/categories" });



  useEffect(() => {
    if (productsSuccess && productData) {
      setProductList(productData);
      setFilteredProducts(productData);
    }
  }, [productsSuccess, productData]);

  useEffect(() => {
    if (categoriesSuccess && categoriesData) {
      setCategoriesList(categoriesData);
    }
  }, [categoriesSuccess, categoriesData]);

  const handleSearch = (searchText) => {
    const filteredProducts = productList.filter((p) =>
      p.title.toLowerCase().includes(searchText)
    );
    setFilteredProducts(filteredProducts);
    setCurrentPage(1)
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

  if (productsLoading || categoriesLoading) return <Loading />;
  if (productsError || categoriesError) return <Error />;
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
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
