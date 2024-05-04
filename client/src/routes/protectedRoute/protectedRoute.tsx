import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const login = window.localStorage.getItem("isLogedIn");

  if (!login) {
    return <Navigate to="/" replace />;
  }

  return children; 
};

export default ProtectedRoute;