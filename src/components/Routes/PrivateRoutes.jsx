// import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import PropTypes from 'prop-types';  


const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/dashboard" />;
};
// PropTypes validation
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,  // Ensure that children is provided
  };
export default PrivateRoute;