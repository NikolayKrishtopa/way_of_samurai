import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (Component: React.FC) => {
  function protectedComponent(props: any) {
    const { isLogged } = props;
    return isLogged ? <Component {...props} /> : <Navigate to='/login' />;
  }
  return protectedComponent;
};

export default ProtectedRoute;
