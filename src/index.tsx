import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Generator from "./routes/Generator";
import "./index.css";

const rootElement = document.getElementById("root") as Element;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Generator />} />
      <Route caseSensitive path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
