import React, { useContext } from 'react';
import Product from './Product';
import { ProductContext } from '../context';

export default function ProductList() {
  const context = useContext(ProductContext);
  const { currentUser, products, openLoginModal, openRegisterModal } = context;

  if (!currentUser) {
    return (
      <div className="auth-screen">
        <i className="fas fa-store-alt"></i>
        <h2>Welcome to ShopVerse</h2>
        <p>Register or log in to browse our products and start shopping.</p>
        <div className="btn-group">
          <button className="auth-btn primary" onClick={openRegisterModal}>
            <i className="fas fa-user-plus"></i> Create account
          </button>
          <button className="auth-btn" onClick={openLoginModal}>
            <i className="fas fa-sign-in-alt"></i> Log in
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-grid-wrapper active">
      <div className="product-grid">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
