import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/common/Layout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./sections/Product.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product/:productName" element={<Product />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
);
