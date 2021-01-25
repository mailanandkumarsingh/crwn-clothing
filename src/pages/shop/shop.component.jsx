import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.component";

/* Phase 1
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
// collectionId above is used to determine which particular category like
// hat, sneakers, is to be rendered, this will go in as
// match.params.collectionId to CollectionPage, since Collection is also under
// <Route it will get access to 3 properties - match, location and history
export default ShopPage; */

/* Phase2 , the code to fill the shop data is now going to be pulled from
Firebase unlike storing it in the shopdata.js */
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  //Shorthand to create a state without constructor
  state = {
    loading: true,
  };

  componentDidMount() {
    const { updateCollections } = this.props;
    //This is an example of observable pattern
    // the observer has typically a next function, error handling function
    // and a complete function , it subscribes to a stream of immeting
    // function, and the next function(in this case async(snapshot) line 53)
    // is called when an event changes in the obervable stream(the onSnapshot
    // funtion)
    const collectionRef = firestore.collection("collections");
    /*this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        //We have used a higherorder component called withSpinner which expects
        // isLoading prop to determine whether to show the loading or the
        // component instead, this is the best place to use it since the async
        // call to the firebase gets the snapshot only when the data is available
        this.setState({
          loading: false,
        });
      }
    );*/

    // If you want to use the Promise style instead of Observable Pattern above
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      //We have used a higherorder component called withSpinner which expects
      // isLoading prop to determine whether to show the loading or the
      // component instead, this is the best place to use it since the async
      // call to the firebase gets the snapshot only when the data is available
      this.setState({
        loading: false,
      });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
