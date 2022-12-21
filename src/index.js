import React from "react";
import ReactDOM from "react-dom/client";
import Snowfall from "react-snowfall";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<Snowfall
					snowflakeCount={150}
					speed={[0.6, 0.8]}
					wind={[0.3, 0.3]}
					radius={[0.5, 2]}
				/>
				<App />
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>
);
