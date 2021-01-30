import React from "react";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.components";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
// import "./header.styles.scss";
import {
  OptionDiv,
  OptionLink,
  OptionsContainer,
  LogoContainer,
  HeaderContainer,
} from "./header.styles";
//The header component wants to listen in on the currentUser and hence it connects
// to the global store/state and pulls in the Global state value of current user
// to be accessible as props. Which is then destructured to get the current user
const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={signOutStart}>SIGNOUT</OptionDiv>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// state in the below argument is the root store/state
// that is mapped to the local prop user
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
