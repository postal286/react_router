import React from "react";
import { render } from "react-dom";
import App from "./app";

import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	root
);