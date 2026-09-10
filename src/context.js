import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    currentUser: null,
    cartDropdownOpen: false,
    loginModalOpen: false,
    registerModalOpen: false,
    checkoutModalOpen: false,
    orderConfirmModalOpen: false,
    lastOrderDetails: null,
    toastMessage: "",
    toastVisible: false,
    loginError: "",
    registerError: "",
    checkoutError: ""
  };

  toastTimer = null;

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState({ products });
  };

  getItem = id => {
    return this.state.products.find(item => item.id === id);
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  };

  showToast = msg => {
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.setState({ toastMessage: msg, toastVisible: true }, () => {
      this.toastTimer = setTimeout(() => {
        this.setState({ toastVisible: false });
      }, 2200);
    });
  };

  // Auth functions
  setUser = user => {
    if (user) {
      this.setState({
        currentUser: user,
        loginError: "",
        registerError: ""
      });
    } else {
      this.setState({
        currentUser: null,
        cart: [],
        loginError: "",
        registerError: ""
      });
    }
  };

  handleLogin = (email, password) => {
    if (!email || !password) {
      this.setState({ loginError: "Please fill in all fields." });
      return false;
    }
    const name = email.split("@")[0] || "User";
    const user = { name, email };
    this.setUser(user);
    this.closeAllModals();
    this.showToast(`Welcome back, ${name}!`);
    return true;
  };

  handleRegister = (name, email, password) => {
    if (!name || !email || !password) {
      this.setState({ registerError: "All fields are required." });
      return false;
    }
    if (password.length < 6) {
      this.setState({ registerError: "Password must be at least 6 characters." });
      return false;
    }
    const user = { name, email };
    this.setUser(user);
    this.closeAllModals();
    this.showToast(`Account created, welcome ${name}!`);
    return true;
  };

  logout = () => {
    this.setUser(null);
    this.showToast("Logged out");
  };

  // Cart functions
  toggleCartDropdown = () => {
    this.setState(prevState => ({ cartDropdownOpen: !prevState.cartDropdownOpen }));
  };

  closeCartDropdown = () => {
    this.setState({ cartDropdownOpen: false });
  };

  addToCart = product => {
    let tempCart = [...this.state.cart];
    const existing = tempCart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      tempCart.push({
        id: product.id,
        name: product.name || product.title,
        price: product.price,
        desc: product.desc || product.info,
        icon: product.icon,
        quantity: 1
      });
    }
    this.setState({ cart: tempCart });
    this.showToast(`${product.name || product.title} added ✦`);
  };

  removeFromCart = id => {
    const tempCart = this.state.cart.filter(item => item.id !== id);
    this.setState({ cart: tempCart });
  };

  clearCart = () => {
    this.setState({ cart: [] });
  };

  // Modal functions
  openLoginModal = () => {
    this.closeAllModals();
    this.setState({ loginModalOpen: true, loginError: "" });
  };

  openRegisterModal = () => {
    this.closeAllModals();
    this.setState({ registerModalOpen: true, registerError: "" });
  };

  openCheckoutModal = () => {
    if (this.state.cart.length === 0) {
      this.showToast("Your cart is empty");
      return;
    }
    if (!this.state.currentUser) {
      this.showToast("Please log in first");
      return;
    }
    this.closeCartDropdown();
    this.closeAllModals();
    this.setState({ checkoutModalOpen: true, checkoutError: "" });
  };

  closeAllModals = () => {
    this.setState({
      loginModalOpen: false,
      registerModalOpen: false,
      checkoutModalOpen: false,
      orderConfirmModalOpen: false,
      loginError: "",
      registerError: "",
      checkoutError: ""
    });
  };

  placeOrder = shippingInfo => {
    const { name, address, city, zip, country, payment } = shippingInfo;
    if (!name || !address || !city || !zip) {
      this.setState({ checkoutError: "Please fill in all shipping fields." });
      return false;
    }

    const orderNum = Math.floor(1000 + Math.random() * 9000);
    const total = this.state.cart.reduce((acc, i) => acc + i.price * i.quantity, 0);

    const orderDetails = {
      orderNum,
      name,
      address: `${address}, ${city}, ${zip}, ${country}`,
      payment,
      total: total.toFixed(2)
    };

    this.setState({
      lastOrderDetails: orderDetails,
      cart: [],
      checkoutModalOpen: false,
      orderConfirmModalOpen: true,
      checkoutError: ""
    });

    this.showToast(`Order #SV-${orderNum} placed!`);
    return true;
  };

  render() {
    const totalCartItems = this.state.cart.reduce((acc, i) => acc + i.quantity, 0);
    const totalCartPrice = this.state.cart.reduce((acc, i) => acc + i.price * i.quantity, 0);

    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          totalCartItems,
          totalCartPrice,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          clearCart: this.clearCart,
          toggleCartDropdown: this.toggleCartDropdown,
          closeCartDropdown: this.closeCartDropdown,
          openLoginModal: this.openLoginModal,
          openRegisterModal: this.openRegisterModal,
          openCheckoutModal: this.openCheckoutModal,
          closeAllModals: this.closeAllModals,
          handleLogin: this.handleLogin,
          handleRegister: this.handleRegister,
          logout: this.logout,
          placeOrder: this.placeOrder,
          showToast: this.showToast
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
