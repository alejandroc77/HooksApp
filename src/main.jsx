import React from "react";
import ReactDOM from "react-dom/client";
//import { FormWithCustomHooks } from "./02-useEfect/FormWithCustomHooks";
//import { MultipleCustomHooks } from "./03-example/MultipleCustomHooks";
//import { SimpleForm } from "./02-useEfect/SimpleForm";
// import { ContentWhithCustomHooks } from "./01-useState/ContentWhithCustomHooks";
// import { CounterApp } from "./01-useState/CounterApp";
// import { HooksApp } from "./HooksApp";
import { FocusScreen } from "./04-useRef/FocusScreen";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <CounterApp />
    <ContentWhithCustomHooks /> */}
    <FocusScreen />
  </>
);
