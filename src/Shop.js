import React, { useState, useEffect } from 'react';
import { data } from './data';
import './App.css';

function Shop() {
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data = await fetch(data.name);

    console.log(data);
  };

  return (
    <div className='App'>
      <h1>Shop</h1>
    </div>
  );
}

export default Shop;
