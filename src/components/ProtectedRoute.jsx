import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  console.log("Hola desde protected")
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"

  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />
}

export default ProtectedRoute