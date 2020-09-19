import React from 'react';
import Spiner from '../spiner/Spiner.component';


const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ?  <Spiner/>  :  <WrappedComponent {...otherProps} />;
  };
 


export default WithSpinner;