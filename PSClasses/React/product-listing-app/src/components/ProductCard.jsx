import React, { useContext, useEffect } from "react";
import "../Styles/Products.css";
import ProductSearch from "./ProductSearch";
import { ProductContext } from "./ProductContext";

const ProductCard = () => {
    const {productList, handleSearch, filteredProducts, setFilteredProducts} = useContext(ProductContext);
    useEffect(() =>{
        setFilteredProducts(productList)
    }, [productList])

  return (
    <React.Fragment>
        <ProductSearch onSearch={handleSearch} />
      <div className="products">
        {filteredProducts.map((p) => (
          <div className="product" key={p.id}>
            <div className="product-image">
              <img src={p.image} />
            </div>
            <div className="product-details">
              <h3>{p.title}</h3>
              <div className="product-rating">
                <p>Rating {p.rating.rate} </p>
                <p> ({p.rating.count})</p>
              </div>
              <div className="product-category">{p.category}</div>
              <p>{p.description}</p>
              <h3>${p.price}</h3>
            </div>
            <div className="product-buttons">
              <div className="product-buy-button">Buy Now </div>
              <div className="product-cart-button">Add to Cart </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
