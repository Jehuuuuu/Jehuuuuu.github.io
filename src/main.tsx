
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { StarsBackground } from "./components/ui/stars-background.tsx";
import { ShootingStars } from "./components/ui/shooting-stars.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShootingStars />
    <StarsBackground />
    <App />
  </StrictMode>
);

