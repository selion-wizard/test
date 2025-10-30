import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import CartIcon from '../components/CartIcon';
import { productsData } from '../data/productsData';

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="min-vh-100 bg-light">
      <CartIcon />
      
      <div className="container py-5">
        <h1 className="text-center mb-5">Задание 2</h1>

        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Загрузка...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {products.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
