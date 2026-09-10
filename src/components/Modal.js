import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../context';

export default function Modal() {
  const context = useContext(ProductContext);
  const {
    currentUser,
    loginModalOpen,
    registerModalOpen,
    checkoutModalOpen,
    orderConfirmModalOpen,
    loginError,
    registerError,
    checkoutError,
    cart,
    totalCartPrice,
    lastOrderDetails,
    closeAllModals,
    openLoginModal,
    openRegisterModal,
    handleLogin,
    handleRegister,
    placeOrder
  } = context;

  // Form states
  const [loginEmail, setLoginEmail] = useState('demo@shop.com');
  const [loginPassword, setLoginPassword] = useState('password123');

  const [registerName, setRegisterName] = useState('Demo User');
  const [registerEmail, setRegisterEmail] = useState('demo@shop.com');
  const [registerPassword, setRegisterPassword] = useState('password123');

  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutAddress, setCheckoutAddress] = useState('123 Shop Lane');
  const [checkoutCity, setCheckoutCity] = useState('New York');
  const [checkoutZip, setCheckoutZip] = useState('10001');
  const [checkoutCountry, setCheckoutCountry] = useState('United States');
  const [checkoutPayment, setCheckoutPayment] = useState('Credit Card');

  useEffect(() => {
    if (currentUser) {
      setCheckoutName(currentUser.name || '');
    }
  }, [currentUser]);

  // Close modals on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeAllModals]);

  // Handle click on modal overlay background
  const handleOverlayClick = e => {
    if (e.target.classList.contains('modal-overlay')) {
      closeAllModals();
    }
  };

  const onLoginSubmit = e => {
    e.preventDefault();
    handleLogin(loginEmail, loginPassword);
  };

  const onRegisterSubmit = e => {
    e.preventDefault();
    handleRegister(registerName, registerEmail, registerPassword);
  };

  const onPlaceOrderSubmit = e => {
    e.preventDefault();
    placeOrder({
      name: checkoutName,
      address: checkoutAddress,
      city: checkoutCity,
      zip: checkoutZip,
      country: checkoutCountry,
      payment: checkoutPayment
    });
  };

  return (
    <>
      {/* LOGIN MODAL */}
      <div
        className={`modal-overlay ${loginModalOpen ? 'active' : ''}`}
        onClick={handleOverlayClick}
      >
        <div className="modal-box">
          <button className="modal-close" onClick={closeAllModals}>
            &times;
          </button>
          <h2>Welcome back</h2>
          <p className="sub">Log in to your account</p>
          <div className="modal-error">{loginError}</div>

          <form onSubmit={onLoginSubmit}>
            <label htmlFor="loginEmail">Email</label>
            <input
              type="email"
              id="loginEmail"
              placeholder="you@example.com"
              value={loginEmail}
              onChange={e => setLoginEmail(e.target.value)}
            />

            <label htmlFor="loginPassword">Password</label>
            <input
              type="password"
              id="loginPassword"
              placeholder="••••••••"
              value={loginPassword}
              onChange={e => setLoginPassword(e.target.value)}
            />

            <div className="modal-actions">
              <button type="submit" className="btn-primary">
                Log in
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={openRegisterModal}
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* REGISTER MODAL */}
      <div
        className={`modal-overlay ${registerModalOpen ? 'active' : ''}`}
        onClick={handleOverlayClick}
      >
        <div className="modal-box">
          <button className="modal-close" onClick={closeAllModals}>
            &times;
          </button>
          <h2>Join ShopVerse</h2>
          <p className="sub">Create your free account</p>
          <div className="modal-error">{registerError}</div>

          <form onSubmit={onRegisterSubmit}>
            <label htmlFor="registerName">Full name</label>
            <input
              type="text"
              id="registerName"
              placeholder="Jane Doe"
              value={registerName}
              onChange={e => setRegisterName(e.target.value)}
            />

            <label htmlFor="registerEmail">Email</label>
            <input
              type="email"
              id="registerEmail"
              placeholder="you@example.com"
              value={registerEmail}
              onChange={e => setRegisterEmail(e.target.value)}
            />

            <label htmlFor="registerPassword">Password</label>
            <input
              type="password"
              id="registerPassword"
              placeholder="min 6 characters"
              value={registerPassword}
              onChange={e => setRegisterPassword(e.target.value)}
            />

            <div className="modal-actions">
              <button type="submit" className="btn-primary">
                Register
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={openLoginModal}
              >
                Already have an account?
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* CHECKOUT MODAL */}
      <div
        className={`modal-overlay ${checkoutModalOpen ? 'active' : ''}`}
        onClick={handleOverlayClick}
      >
        <div className="modal-box">
          <button className="modal-close" onClick={closeAllModals}>
            &times;
          </button>
          <h2>
            <i
              className="fas fa-truck"
              style={{ color: '#2563eb', marginRight: '10px' }}
            ></i>
            Checkout
          </h2>
          <p className="sub">Enter your shipping details to place your order.</p>
          <div className="modal-error">{checkoutError}</div>

          <form onSubmit={onPlaceOrderSubmit}>
            <label htmlFor="checkoutName">Full Name</label>
            <input
              type="text"
              id="checkoutName"
              placeholder="John Doe"
              value={checkoutName}
              onChange={e => setCheckoutName(e.target.value)}
            />

            <label htmlFor="checkoutAddress">Street Address</label>
            <input
              type="text"
              id="checkoutAddress"
              placeholder="123 Main St"
              value={checkoutAddress}
              onChange={e => setCheckoutAddress(e.target.value)}
            />

            <label htmlFor="checkoutCity">City</label>
            <input
              type="text"
              id="checkoutCity"
              placeholder="New York"
              value={checkoutCity}
              onChange={e => setCheckoutCity(e.target.value)}
            />

            <label htmlFor="checkoutZip">ZIP / Postal Code</label>
            <input
              type="text"
              id="checkoutZip"
              placeholder="10001"
              value={checkoutZip}
              onChange={e => setCheckoutZip(e.target.value)}
            />

            <label htmlFor="checkoutCountry">Country</label>
            <select
              id="checkoutCountry"
              value={checkoutCountry}
              onChange={e => setCheckoutCountry(e.target.value)}
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Germany">Germany</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
            </select>

            <label htmlFor="checkoutPayment">Payment Method</label>
            <select
              id="checkoutPayment"
              value={checkoutPayment}
              onChange={e => setCheckoutPayment(e.target.value)}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Apple Pay">Apple Pay</option>
              <option value="Google Pay">Google Pay</option>
            </select>

            <div
              style={{
                marginTop: '1.2rem',
                background: '#f8fafc',
                padding: '1rem',
                borderRadius: '20px'
              }}
            >
              <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                Order Summary
              </h4>
              {cart.map(item => (
                <div className="order-summary-item" key={item.id}>
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="order-total">
                <span>Total</span>
                <span>${totalCartPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="modal-actions">
              <button type="submit" className="btn-primary">
                <i className="fas fa-check-circle"></i> Place Order
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={closeAllModals}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ORDER CONFIRMATION MODAL */}
      <div
        className={`modal-overlay ${orderConfirmModalOpen ? 'active' : ''}`}
        onClick={handleOverlayClick}
      >
        <div className="modal-box" style={{ textAlign: 'center' }}>
          <i
            className="fas fa-check-circle"
            style={{ fontSize: '4rem', color: '#22c55e', marginBottom: '1rem' }}
          ></i>
          <h2>Order Placed!</h2>
          <p className="sub">
            Your order has been successfully placed. Thank you for shopping at ShopVerse!
          </p>

          {lastOrderDetails && (
            <div
              style={{
                background: '#f0f6ff',
                borderRadius: '20px',
                padding: '1rem',
                margin: '1rem 0',
                textAlign: 'left'
              }}
            >
              <p>
                <strong>Order #:</strong> #SV-{lastOrderDetails.orderNum}
              </p>
              <p>
                <strong>Shipping to:</strong> {lastOrderDetails.name},{' '}
                {lastOrderDetails.address}
              </p>
              <p>
                <strong>Total:</strong> ${lastOrderDetails.total}
              </p>
            </div>
          )}

          <button
            className="btn-primary"
            onClick={closeAllModals}
            style={{
              width: '100%',
              padding: '0.8rem',
              borderRadius: '60px',
              border: 'none',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
}