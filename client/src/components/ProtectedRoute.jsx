
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(['token']);
  const isAuthenticated = !!cookies.token;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
