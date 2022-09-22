import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./ui/pages/Home";
import Products from "./ui/pages/Products";
import TextManager from "./ui/pages/TextManager";
import Users from "./ui/pages/Users";
import Sidebar from "./ui/components/Sidebar/Sidebar";
import Navbar from "./ui/components/Navbar/NavBar";
import Login from "./ui/pages/Login";
import Register from "./ui/pages/Register";
import useAuth, { AuthProvider } from "./context/auth";
import { useEffect } from "react";
import { getCurrentUser } from "./api/AuthAPI";
import { getLocalStorageValue } from "./utils";

function App() {
  const {
    state: { user, isAuthenticated },
    dispatch,
  } = useAuth();

  useEffect(() => {
    let ignore = false;

    async function fetchUser() {
      try {
        const payload = await getCurrentUser(getLocalStorageValue("user")?.id);
        const { token, ...user } = payload.data;
        if (!ignore) {
          dispatch({ type: "LOAD_USER", user });
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (!user && isAuthenticated) {
      fetchUser();
    }
    return () => {
      ignore = true;
    };
  }, [dispatch, isAuthenticated, user]);

  const ProtectedRoute = ({ redirectPath = "/login", children }) => {
    if (!getLocalStorageValue("token")) {
      return <Navigate to={redirectPath} replace />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Navbar user={user} isAuthenticated={isAuthenticated} />
      <div className="flex h-screen">
        <Sidebar user={user} isAuthenticated={isAuthenticated} />
        <div className="content overflow-x-hidden overflow-scroll w-full p-4 lg:p-12">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <Users user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute>
                  <Register user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cms"
              element={
                <ProtectedRoute>
                  <TextManager />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
