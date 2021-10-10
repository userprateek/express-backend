import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Default from "./components/Default.component";
import Portfolio from "./components/Portfolio.component";
import Contacts from "./components/contact.component";
import { Custom404 } from "./components/custom404";
import "./assets/css/main.scss";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/portfolio/" component={Portfolio} />
				<Route path="/contact/" component={Contacts} />
				<Route exact path="/" component={Default} />
				<Route component={Custom404} />
			</Switch>
		</Router>
	);
}
const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps)(App);
