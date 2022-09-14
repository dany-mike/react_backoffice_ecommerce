import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ui/pages/Home";
import Products from "./ui/pages/Products";
import TextManager from "./ui/pages/TextManager";
import Users from "./ui/pages/Users";
import Sidebar from "./ui/components/Sidebar/Sidebar";
import Navbar from "./ui/components/Navbar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="content overflow-x-hidden overflow-scroll w-full p-4 lg:p-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cms" element={<TextManager />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
