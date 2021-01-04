import React from "react";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
// This is were the cart redux state will be set
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
