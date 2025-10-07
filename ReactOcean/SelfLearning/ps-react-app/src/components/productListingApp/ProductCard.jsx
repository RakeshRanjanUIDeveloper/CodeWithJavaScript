import React, { useContext, useEffect } from "react";
import "../productListingApp/Styles/Products.css";
import ProductSearch from "../productListingApp/ProductSearch";
import { ProductContext } from "../productListingApp/ProductContext";
import ProductPagination from "../productListingApp/ProductPagination";

const ProductCard = () => {
  const { productList, handleSearch, filteredProducts, setFilteredProducts, currentPage } =
    useContext(ProductContext);

    const productsPerPage = 5;
    const startIndex = (currentPage-1) * productsPerPage;
    const endIndex = startIndex+productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex)

  useEffect(() => {
    setFilteredProducts(productList);
  }, [productList]);

  return (
    <React.Fragment>
      <div className="products-headers">
          <div className="products-search">
              <ProductSearch onSearch={handleSearch} />
          </div>
          <div className="products-pagination">
              <ProductPagination />
          </div>
      </div>
      <div className="products">
        {currentProducts.length > 0 ? (
          currentProducts.map((p) => (
            <div className="product" key={p.id}>
              <div className="product-image">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="product-details">
                <h3>{p.title}</h3>
                <div className="product-rating">
                  <p>Rating: {p.rating.rate}</p>
                  <p>({p.rating.count})</p>
                </div>
                <div className="product-category">{p.category}</div>
                <p>{p.description}</p>
                <h3>${p.price}</h3>
              </div>
              <div className="product-buttons">
                <div className="product-buy-button">Buy Now</div>
                <div className="product-cart-button">Add to Cart</div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products-message">
            <h2>Oops! 😕</h2>
            <p>No products found in this price range.</p>
            <p>Please try adjusting your filters or search criteria.</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
