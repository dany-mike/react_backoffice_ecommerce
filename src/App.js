import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ui/pages/Home";

function App() {
  const rootElement = document.getElementById("root");
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>,
    rootElement
  );
}

export default App;
