import { Outlet, Navigate } from 'react-router';
import { useAuth } from './hooks/use-auth';

export const PrivateRoutes = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/sign_in" />;
};
