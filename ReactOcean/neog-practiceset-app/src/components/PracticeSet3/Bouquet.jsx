import React from 'react'

const Bouquet = ({bouquet}) => {
    const bouquetWithRose = bouquet.find((b) => b.flowers.includes('rose'));
    console.log(bouquetWithRose)
    const bouquetPriceMore = bouquet.find((b) => b.price > 2000);
    console.log(bouquetPriceMore)
  return (
    <div>
       <h2>Price of bouquet with roses : {bouquetWithRose.price}</h2>
       <h2>display the flowers of a bouquet in an ordered list on the DOM
which has a price above 2000. </h2>
{
    bouquetPriceMore.flowers.map((f) => <h2 key={f}>{f}</h2>)
}
    </div>

  )
}

export default Bouquet