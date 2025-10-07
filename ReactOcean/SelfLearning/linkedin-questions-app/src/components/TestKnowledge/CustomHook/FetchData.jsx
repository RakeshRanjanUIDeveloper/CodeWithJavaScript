import React from 'react';
import useFetch from './useFetch';

const FetchData = () => {
  const data = useFetch('https://jsonplaceholder.typicode.com/todos');

  return (
    <div>
      <h2>FetchData</h2>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};

export default FetchData;
