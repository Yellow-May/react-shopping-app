import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
