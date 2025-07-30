import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../productListingApp/ProductContext";
const Prices = () => {
  const { handlePriceChange } = useContext(ProductContext);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const pricesData = [
    {
      value: "$0-$100",
    },
    {
      value: "$100-$200",
    },
    {
      value: "$200-$300",
    },
    {
      value: "$300-$500",
    },
    {
      value: "$500-$1000",
    },
  ];

  useEffect(() => {
    handlePriceChange({ min: minPrice, max: maxPrice });
  }, [minPrice, maxPrice]);
  return (
    <React.Fragment>
      <div className="prices-lists">
        {pricesData.map((p, index) => (
          <div className="price-list" key={index}>
            {p.value}
          </div>
        ))}
      </div>
      <div className="price-boxes">
        <div className="price-min-box">
          <input
            type="text"
            value={minPrice}
            placeholder="$min"
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="price-max-box">
          <input
            type="text"
            value={maxPrice}
            placeholder="$max"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Prices;
