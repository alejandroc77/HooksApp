import React from "react";
import ReactDOM from "react-dom/client";
import { SimpleForm } from "./02-useEfect/SimpleForm";
// import { ContentWhithCustomHooks } from "./01-useState/ContentWhithCustomHooks";
// import { CounterApp } from "./01-useState/CounterApp";
// import { HooksApp } from "./HooksApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CounterApp />
    <ContentWhithCustomHooks /> */}
    <SimpleForm />
  </React.StrictMode>
);
