import React from "react";

const Products = () => {
  const products = [
    { name: "Perk", quantity: 10, sales: 7 },
    { name: "Pepsi", quantity: 10, sales: 20 },
    { name: "Coke", quantity: 18, sales: 50 },
    { name: "Maggi", quantity: 41, sales: 22 },
    { name: "5Star", quantity: 7, sales: 9 },
  ];
  return (
    <div>
        <h2>Product Names</h2>
        <ul>
            {
                products.map((p) =>(
                    <li key={p.name}>{p.name}</li>
                ))
            }
        </ul>
        <h2>Number of Sales is more than Number of Quantity</h2>
        <ul>
            {
                products.filter((p) => p.sales > p.quantity).map((p) =>(
                    <li key={p.name}>Name: {p.name} - Sales: {p.sales} - Quantity: {p.quantity}</li>
                ))
            }
        </ul>
    </div>
  );
};

export default Products;
