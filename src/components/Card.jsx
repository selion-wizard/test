import React from 'react';
import { useCart } from '../contexts/CartContext';

const Card = ({ id, image, title, description, price }) => {
  const { addToCart, isPurchased } = useCart();
  const purchased = isPurchased(id);

  const handleBuyClick = () => {
    if (!purchased) {
      addToCart(id);
    }
  };

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted flex-grow-1">{description}</p>
          <p className="fw-bold fs-5 mb-3">{price}</p>
          <button
            className={`btn ${purchased ? 'btn-success' : 'btn-primary'} w-100`}
            onClick={handleBuyClick}
            disabled={purchased}
          >
            {purchased ? '✓ Куплено' : 'Купить'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
