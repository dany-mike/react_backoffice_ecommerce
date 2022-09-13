import { BrowserRouter, Routes, Route } from "react-router-dom";
import OSidebar from "./ui/components/organisms/OSidebar";
import Home from "./ui/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <OSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
