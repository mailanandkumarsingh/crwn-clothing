import React from "react";
import CustomButton from "../custom-button/custom-button.components";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.components";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => {
        return <CartItem key={cartItem.key} item={cartItem} />;
      })}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropdown);
