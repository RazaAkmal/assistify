import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppLayout from "./AppLayout";
import Examples from "./examples/page"
import Integrations from "./integrations/page"
import Pricing from "./pricing/page"
import Contact from './contact/page'
import "./index.css";
import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <AppLayout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppLayout>
    </Router>
  </React.StrictMode>
);
