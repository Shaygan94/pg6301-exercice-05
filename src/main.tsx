import React from "react";
import { createRoot } from "react-dom/client";
import { Application } from "./methods/application.js";

createRoot(document.getElementById("app")!).render(<Application />);
