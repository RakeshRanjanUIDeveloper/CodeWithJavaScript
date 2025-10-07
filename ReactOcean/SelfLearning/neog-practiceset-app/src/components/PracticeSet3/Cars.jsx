import React from 'react'

const Cars = () => {
    const cars = [
      {
        id: 1,
        name: "supra",
        price: 500000,
        category: "sports",
      },
      {
        id: 2,
        name: "A5",
        price: 700000,
        category: "luxury",
      },
      {
        id: 3,
        name: "huyara",
        price: 1500000,
        category: "sports",
      },
      {
        id: 4,
        name: "agera R",
        price: 3500000,
        category: "sports",
      },
    ];
 
    // const luxuryCars = cars.filter((c) => c.category === 'luxury').length;
    // const sportsCars = cars.filter((c) => c.category === 'sports').length;
    const carCounts = cars.reduce((acc, curr) => {
        if(curr.category === 'sports'){
            acc.sports +=1
        }
        if(curr.category === 'luxury'){
            acc.luxury +=1
        }
        return acc;
    }, {sports: 0, luxury:0})
  return (
    <div>
        <h3>luxuryCars - {carCounts.luxury}</h3>
        <h3>sportsCars - {carCounts.sports}</h3>
    </div>
  )
}

export default Cars