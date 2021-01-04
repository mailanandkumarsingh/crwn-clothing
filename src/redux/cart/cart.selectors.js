import { createSelector } from "reselect";
//First create an input selector
// then pass it to output selector which makes it
// a memoized selector, ie a selector that remembers the prev state
// and only re-renders if its changed previous value

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
