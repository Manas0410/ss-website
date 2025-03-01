import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import Layout from "./components/common/Layout.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Product from "./sections/Product.jsx";
import VisitUs from "./sections/VisitUs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productName" element={<Product />} />
          <Route path="/visit" element={<VisitUs />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
);
