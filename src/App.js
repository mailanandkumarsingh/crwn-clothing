import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.components";
import Header from "./components/header/header.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { checkUserSession } from "./redux/user/user.actions";
import // auth,
// createUserProfileDocument,
/* addCollectionAndDocuments,*/
"./firebase/firebase.utils";
// Appjs is the one which will generate the SET_CURRENT_USER action and fill
// the payload of the user, hence it will use the mapDispathToProps to do that
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
// import { selectCollectionForPreview } from "./redux/shop/shop.selectors";
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

//You want to use the CurrentUser properties and determine whether he should be on
// the signin page or the home page after he is logged in or logged out
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionForPreview,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
// What this means is setCurrentUser: , this function name is available locally as
// props, and that will in turn call dispact(setCurrentUser(user)), which is the
// funtion imported from user.action.js , which will basically return an action object
// with the type and the payload
/* const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
