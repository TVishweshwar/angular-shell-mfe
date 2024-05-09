// import React from "react";
// import ReactDOM from "react-dom";

// export const Third = () => {
//   return (
//     <div>
//       <h2>This is the Third component rendered as a custom element</h2>
//       {/* Add any content or props as needed */}
//     </div>
//   );
// };

// // Check if the custom element is already defined before defining it
// if (!customElements.get("third-element")) {
//   customElements.define(
//     "third-element",
//     class extends HTMLElement {
//       connectedCallback() {
//         const mountPoint = document.createElement("div");
//         this.attachShadow({ mode: "open" }).appendChild(mountPoint);

//         ReactDOM.render(<Third />, mountPoint);
//       }
//     }
//   );
// }

import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from "react-dom/client"

export const Third = () => {
  return (
    <div>
      <h2>This is the Third component rendered as a custom element</h2>
      {/* Add any content or props as needed */}
    </div>
  );
};

// Check if the custom element is already defined before defining it
if (!customElements.get("third-element")) {
  customElements.define(
    "third-element",
    class extends HTMLElement {
      connectedCallback() {
        const mountPoint = document.createElement("div");
        this.attachShadow({ mode: "open" }).appendChild(mountPoint);

        const root = createRoot(mountPoint); // Use createRoot from "react-dom/client"
        root.render(<Third />);
      }
    }
  );
}
