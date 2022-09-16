import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./ui/pages/Home";
import Products from "./ui/pages/Products";
import TextManager from "./ui/pages/TextManager";
import Users from "./ui/pages/Users";
import Sidebar from "./ui/components/Sidebar/Sidebar";
import Navbar from "./ui/components/Navbar/NavBar";
import Login from "./ui/pages/Login";
import Register from "./ui/pages/Register";

function App() {
  const ProtectedRoute = ({ user, redirectPath = "/login", children }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="content overflow-x-hidden overflow-scroll w-full p-4 lg:p-12">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <Users />
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
              path="/cms"
              element={
                <ProtectedRoute>
                  <TextManager />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
