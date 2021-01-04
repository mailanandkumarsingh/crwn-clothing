// This file is maintained to updated the quantity of the items
// typicalling a cart item will have id, name, imageUrl, detail
// this file will add - quantity as one of the properties to each
// item, it will check for duplicates and increment the quantity of
// that item accordingly
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      // return from the function
      return cartItem.id === cartItemToAdd.id // return each mapped item to form the array
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
