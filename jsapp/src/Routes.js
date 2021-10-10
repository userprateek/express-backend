import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
function Routes() {
	return (
		<Router>
			<Route path="/" />
			<Route path="/portfolio/" />
			<Route path="/contact/" />
		</Router>
	);
}

export default Routes;
