import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context';

export default function Navbar() {
  const context = useContext(ProductContext);
  const {
    currentUser,
    cart,
    totalCartItems,
    totalCartPrice,
    cartDropdownOpen,
    toggleCartDropdown,
    closeCartDropdown,
    openLoginModal,
    openRegisterModal,
    openCheckoutModal,
    removeFromCart,
    logout
  } = context;

  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        closeCartDropdown();
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [closeCartDropdown]);

  return (
    <header className="shop-header">
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
        <i className="fas fa-store"></i> ShopVerse
      </Link>
      
      <div className="header-actions">
        {!currentUser ? (
          <div className="auth-buttons">
            <button className="auth-btn" onClick={openLoginModal}>
              <i className="fas fa-sign-in-alt"></i> Log in
            </button>
            <button className="auth-btn primary" onClick={openRegisterModal}>
              <i className="fas fa-user-plus"></i> Register
            </button>
          </div>
        ) : (
          <div className="user-badge show">
            <i className="fas fa-user-circle"></i>
            <span>{currentUser.name}</span>
            <button className="logout-link" onClick={logout} title="Log out">
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        )}

        <div style={{ position: 'relative' }}>
          <div className="cart-icon" ref={toggleRef} onClick={toggleCartDropdown}>
            <i className="fas fa-shopping-bag"></i> <span>Cart</span>
            <span className="cart-count">{totalCartItems}</span>
          </div>

          <div
            className={`cart-dropdown ${cartDropdownOpen ? 'active' : ''}`}
            ref={dropdownRef}
          >
            <h4>
              <i className="fas fa-bag-shopping" style={{ marginRight: '8px' }}></i>
              Your cart
            </h4>

            <div className="cart-items-list">
              {cart.length === 0 ? (
                <div className="empty-cart-msg">
                  <i className="fas fa-bag-shopping" style={{ marginRight: '6px' }}></i>
                  Your cart is empty
                </div>
              ) : (
                cart.map(item => (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item-info">
                      <span className="cart-item-title">
                        {item.name}{' '}
                        <span style={{ fontWeight: 400, fontSize: '0.8rem', color: '#64748b' }}>
                          x{item.quantity}
                        </span>
                      </span>
                      <span className="cart-item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="cart-total">
              <span>Total</span>
              <span>${totalCartPrice.toFixed(2)}</span>
            </div>

            <button className="checkout-btn" onClick={openCheckoutModal}>
              <i className="fas fa-lock" style={{ marginRight: '8px' }}></i>
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
