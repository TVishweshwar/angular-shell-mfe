import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import First from "./pages/First";
import Second from "./pages/Second";
import { Third } from "./pages/Third";

// Define the App component
const App: React.FC = () => (
  <>
    <h1>react-mfe</h1>
    <BrowserRouter basename="mfe4">
      <div>
        <Link to="/first">First</Link>
        <Link to="/second" style={{ marginLeft: "20px" }}>
          Second
        </Link>
        <Link to="/Third" style={{ marginLeft: "20px" }}>
          Third
        </Link>
      </div>
      <h3 style={{ color: "green" }}>React routes</h3>
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/Third" element={<Third />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
    {/* Add more links here */}
  </>
);

// Define the custom element class
class Mfe4Element extends HTMLElement {
  connectedCallback() {
    // Create a root element for the custom element
    const root = this.attachShadow({ mode: "open" });

    // Use createRoot to render the App component into the root element
    const reactRoot = createRoot(root);
    reactRoot.render(<App />);
  }
}

// Define the custom element
customElements.define("mfe4-element", Mfe4Element);
