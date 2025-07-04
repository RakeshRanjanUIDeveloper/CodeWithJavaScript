import React, { useEffect, useState } from 'react'
import './CartsPagination.css'
const CartsPagination = () => {
    const [allCarts, setAllCarts] = useState([]);
    const [page, setPage] = useState(1);
    const fetchCartsData = async () => {
        const response = await fetch('https://dummyjson.com/carts');
        const data = await response.json();
        console.log(data.carts);
        setAllCarts(data.carts);
    }
    useEffect(() => {
        fetchCartsData();
    }, [])

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= allCarts.length/1 && selectedPage !== page)
        setPage(selectedPage)
    }

    return (
        <div>
            <h2>Cart List App</h2>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Title</th>
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allCarts.slice(page*1-1, page*1).map((c) => (
                            <tr key={c.id}>
                                <td>{c.id}</td>
                                <td>
                                    <ul className="product-list">
                                        {c.products.map((p) => (
                                            <li key={p.id}>{p.title}</li>
                                        ))}
                                    </ul>
                                </td>

                                <td>
                                    <ul className="product-list">
                                        {c.products.map((p) => (
                                            <li key={p.id} className="price">${Math.round(p.price)}</li>
                                        ))}
                                    </ul>
                                </td>

                                <td>
                                    <ul className="product-list">
                                        {c.products.map((p) => (
                                            <li key={p.id} className="quantity">{p.quantity}</li>
                                        ))}
                                    </ul>
                                </td>

                                <td>
                                    <ul className="product-list">
                                        {c.products.map((p) => (
                                            <li key={p.id} className="total-price">${Math.round(p.price * p.quantity)}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                <div className='table-pagination'>
                    <span className={page > 1 ? '' : 'pagination_disabled'} onClick={() => selectPageHandler(page-1)}>Prev</span>
                    {
                        [...Array(allCarts.length)].map((_, i) => {
                            return <span className={page === i+1? 'pagination_selected' : ''} key={i} onClick={() => selectPageHandler(i+1)}>{i+1}</span>
                        })
                    }
                    <span className={page < allCarts.length/1 ? '' : 'pagination_disabled'} onClick={() => selectPageHandler(page+1)}>Next</span>
                </div>
            </div>
        </div>
    )
}

export default CartsPagination