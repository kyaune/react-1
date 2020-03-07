import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import ComponentMy from "./ComponentMy";
//import TodoBox from "./Hexlet/ToDos/TodoBox";
import Main from "./Hexlet/Modal/Main";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
