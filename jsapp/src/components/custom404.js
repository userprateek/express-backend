import { Link } from "react-router-dom";
export function Custom404() {
	return (
		<div className="error-page">
			<div className="heading-404">404 Error</div>
			<div className="description-404">
				We are not sure how you got here. but you are not on right
				location
			</div>
			<Link to="/" className="home-link">
				let's go to home
			</Link>
		</div>
	);
}
