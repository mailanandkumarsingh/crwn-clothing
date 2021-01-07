import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.component";

// Since ShopPage is part of the Route in the App.js ,
// it gets passed the props match, location and history
// so you dont need to use - useRouter to get access to
// the 3 properties of Route
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
// category id above is used to determine which particular category like
// hat, sneakers, is to be rendered, this will go in as
// match.params.collectionId to CollectionPage, since Collection is also under
// <Route it will get access to 3 properties - match, location and history
export default ShopPage;
