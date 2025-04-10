import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}
