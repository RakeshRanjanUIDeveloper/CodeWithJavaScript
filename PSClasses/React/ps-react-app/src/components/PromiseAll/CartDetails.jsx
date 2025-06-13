import React, { useEffect, useState } from 'react'

const CartDetails = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const fetchCartsWithProducts = async () => {
      try {
        const cartIds = [1, 2, 3, 4, 5];
        const cartPromises = cartIds.map((id) => {
          return fetch(`https://dummyjson.com/carts/${id}`).then((res) => res.json())
        })
        const cartResults = await Promise.all(cartPromises);
        console.log(cartResults);

        const allProducts = cartResults.flatMap((cart) => cart.products);
        console.log(allProducts);

        const uniqueProductsId = [...new Set(allProducts.map((p) => p.id))];
        console.log(uniqueProductsId);

        const productDetailsPromises = uniqueProductsId.map((id) => {
          return fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json());
        })
        const productDetails = await Promise.all(productDetailsPromises);
        console.log(productDetails);

        //Check with 
        const productDetailsMap = {};
        productDetails.forEach((prod) => {
          productDetailsMap[prod.id] = prod
        })
        console.log(productDetailsMap)
        const detailedCarts = cartResults.map((cart) => ({
          id: cart.id,
          products: cart.products.map((product) => ({
            title: productDetailsMap[product.id]?.title,
            description: productDetailsMap[product.id]?.description
          }))
        }))
        setCartData(detailedCarts)


      } catch (error) {
        console.error('Error fetching cart/product data:', error);
      }
    }
    fetchCartsWithProducts();
  }, [])
  return (
    <React.Fragment>
      <div>Cart  Details</div>
      {
        cartData.map((cart) => (
          <div key={cart.id}>
            <h2>Id - {cart.id}</h2>
            {cart.products.map((product, index) => (
              <div key={index} style={{ paddingLeft: '20px' }}>
                <p><strong>Title</strong> - {product.title}</p>
                <p><strong>Description</strong> - {product.description}</p>
                <hr />
              </div>
            ))}
          </div>
        ))
      }
    </React.Fragment>
  )
}

export default CartDetails