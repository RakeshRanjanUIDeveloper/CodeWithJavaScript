import React, { useEffect, useState } from "react";

const DebounceApp = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setAllProducts(data);
    setFilteredProducts(data);

  };
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() =>{
        const debounceTime = setTimeout(()=>{
                const filtered  = allProducts.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredProducts(filtered)
        }, 1000)

        return () => clearTimeout(debounceTime)
  }, [searchText, allProducts])

  return (
    <div className="search-container">
      <input type="text" placeholder="Search your Product..." value={searchText} onChange={(e) => setSearchText(e.target.value)}  />
      <div className="products-container">
        {filteredProducts.map((p) => (
          <div className="product" key={p.id}>
            <div className="product-image">
              <img src={p.image} />
            </div>
            <div className="product-details">
                <h2>{p.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebounceApp;
