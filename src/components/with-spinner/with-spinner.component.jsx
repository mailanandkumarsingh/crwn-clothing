import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

//We are going to create a Higher Order Component
// its a component that takes in a component and returns a modified component
// the example below is of returning a functional component
// hence the format for functional component is ({...props}) => {return (<component></component>)}
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};
export default WithSpinner;
