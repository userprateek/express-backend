import React from "react";
import Navbar from "./navbar.component";
import Pfrecords from "./PortfolioRecord.component";
import axios from "axios";

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			profiledata: "",
		};
	}

	componentDidMount() {
		const url = "/profiledata/";
		axios
			.get(url)
			.then((res) => {
				this.setState({ profiledata: res.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		var { profiledata } = this.state;
		const page = profiledata
			? profiledata.map((el) => <Pfrecords key={el._id} record={el} />)
			: "";

		return (
			<div className="parent-portfolio">
				<Navbar />
				<div className="site-main">
					<div className="site-main-inner-portfolio">
						<div className="portfolio-section">
							<h2>PORTFOLIO</h2>
							<p>
								I have worked on following project in front-end
								as well as back-end
							</p>
							<div className="timeline portfolio-timeline">
								<ul>{page}</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;
