import React, { useContext } from 'react';
import { ProductContext } from '../context';

export default function Product({ product }) {
  const context = useContext(ProductContext);
  const { addToCart } = context;
  const { name, title, price, desc, info, icon } = product;

  const displayTitle = name || title;
  const displayDesc = desc || info;

  return (
    <div className="product-card">
      <div className="product-img">
        <i className={`fas ${icon || 'fa-box'}`}></i>
      </div>
      <div className="product-title">{displayTitle}</div>
      <div className="product-desc">{displayDesc}</div>
      <div className="product-price">
        ${typeof price === 'number' ? price.toFixed(2) : price} <small>USD</small>
      </div>
      <button className="add-btn" onClick={() => addToCart(product)}>
        <i className="fas fa-plus-circle"></i> Add to cart
      </button>
    </div>
  );
}