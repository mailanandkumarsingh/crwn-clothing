import { createSelector } from "reselect";

const selectShop = (state) => state.shop;
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// Done to return it as an array
export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
//Used when the URL has /shops/hats(where hats is the url param passed)
export const selectCollection = (collectionUrlParams) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParams] : null
  );
