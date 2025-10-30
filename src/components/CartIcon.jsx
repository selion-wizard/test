import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartIcon = () => {
  const { cartCount, resetCart } = useCart();

  return (
    <div
      className="position-fixed top-0 end-0 m-4 p-3 bg-white rounded shadow-lg"
      style={{ cursor: 'pointer', zIndex: 1000 }}
      onClick={resetCart}
      title="Нажмите чтобы очистить корзину"
    >
      <div className="position-relative d-inline-block">
        <ShoppingCart size={32} color="#0d6efd" />
        {cartCount > 0 && (
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: '14px' }}
          >
            {cartCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default CartIcon;