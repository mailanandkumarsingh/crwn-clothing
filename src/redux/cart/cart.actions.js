import CartActionTypes from "./cart.types";
// Here we dont need the second parameter of payload
// since in the reducer we are just toggling the present state
// of hidden, its like a flag
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
