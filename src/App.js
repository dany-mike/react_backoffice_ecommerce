import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ui/pages/Home";
import OSidebar from "./ui/components/organisms/OSidebar";
import Users from "./ui/pages/Users";
import Products from "./ui/pages/Products";
import TextManager from "./ui/pages/TextManager";

function App() {
  const rootElement = document.getElementById("root");
  render(
    <BrowserRouter>
      <OSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cms" element={<TextManager />} />
      </Routes>
    </BrowserRouter>,
    rootElement
  );
}

export default App;
