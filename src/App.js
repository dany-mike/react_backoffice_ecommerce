import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ui/pages/Home";
import Products from "./ui/pages/Products";
import TextManager from "./ui/pages/TextManager";
import Users from "./ui/pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cms" element={<TextManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
