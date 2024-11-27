import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import WebLayout from "./layouts/WebLayout";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import './index.css'

import './i18n';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route element={<WebLayout />}>
        <Route path="" element={<Home/>} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/contacts" element={<Contacts/>} />
      </Route>
    </Routes>
  </Router>
);

