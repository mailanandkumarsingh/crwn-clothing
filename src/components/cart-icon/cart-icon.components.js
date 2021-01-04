import React from "react";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
// This is were the cart redux state will be set
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// The example below is an example of Selector ...
// in this the mapStateToProps uses the value and sends a new cummulated/calculated
// value locally(itemcount using redue), unlike other(mapStateToProps) examples
// where a particular value maybe user or items is pulled off
// from the global state and is made available as props locally
const mapStateToProps = (state) => {
  console.log("mapStatetoProps of carticon");
  return {
    itemCount: selectCartItemsCount(state),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
