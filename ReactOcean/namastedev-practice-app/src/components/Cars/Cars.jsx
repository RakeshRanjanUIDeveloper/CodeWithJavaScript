import React, { useState } from 'react';
import CarsData from './CarsData.json';
import './Cars.css';

const Cars = () => {
  const [allCars] = useState(CarsData.cars);
  const [currentPage, setCurrentPage] = useState(1);
  // Get unique cars by car_name
  const uniqueCars = Array.from(
    new Map(allCars.map(car => [car.car_name, car])).values()
  );

  console.log(uniqueCars);

  const carsPerPage = 6
  const totalItems = uniqueCars.length; // 58
  const totalPages = Math.ceil(totalItems/carsPerPage); //10

  const startIndex = (currentPage -1) * carsPerPage ;
  const lastIndex = startIndex + carsPerPage
  const displayCars = uniqueCars.slice(startIndex, lastIndex);

  const handlePageClick = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }
  const handlePrevClick = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage-1)
        }
  }
  const handleNextClick = () =>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage+1)
        }
  }
  return (
    <div className="cars-wrapper">
      <h2 className="heading">🚗 Cars List App</h2>
      <div className="cars-container">
        {displayCars.map((car) => (
          <div className="car-card" key={car.id}>
            <h3 className="car-name">{car.car_name}</h3>
            <p><strong>Model:</strong> {car.car_model}</p>
            <p><strong>Color:</strong> {car.car_color}</p>
            <p><strong>Year:</strong> {car.car_model_year}</p>
            <p><strong>Price:</strong> {car.price}</p>
            <p className={car.availability ? 'available' : 'not-available'}>
              {car.availability ? '✅ Available' : '❌ Not Available'}
            </p>
          </div>
        ))}
      </div>
      <div className='cars-pagination'>
            <span onClick={handlePrevClick} className={currentPage=== 1 ? 'pagination_disabled': ''}>Prev</span>
            {
                [...Array(totalPages)].map((_, i) => (
                    <span  key={i} className={currentPage === i+1 ? 'pagination_selected' : ''} onClick={() => handlePageClick(i+1)}>{i+1}</span>
                ))
            }
            <span onClick={handleNextClick} className={currentPage === totalPages ? 'pagination_disabled' : ''}>Next</span>
      </div>
    </div>
  );
};

export default Cars;
