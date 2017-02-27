import * as React from "react";
import * as ReactDOM from "react-dom";
import {Ribbon} from "./src/Ribbon";

// Render a simple React component into the body.
let element = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(element);
ReactDOM.render(<Ribbon/>, element);
