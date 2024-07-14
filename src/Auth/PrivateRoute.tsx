// PrivateRoute.tsx
import React from 'react';
import { RouteProps, Navigate } from 'react-router-dom';
import { useAuth } from './Authcontext';

interface PrivateRouteProps extends RouteProps {
  role: string;
  element: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ role, element: Component, ...rest }) => {
  const { user } = useAuth();

  return user && user.role === role ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
