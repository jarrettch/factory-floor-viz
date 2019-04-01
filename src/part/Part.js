import React, { Component } from 'react';

class Part extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.type,
			allowedTests: this.getAllowedTests(this.props.type),
			currentStatus: this.getStatus(this.props.status)
		}
	}
	getAllowedTests() {
		switch(this.props.type) {
			case 'A1':
				this.setState({allowedTests: ["Vibration", "Thermal", "Radiation"]});
				break;
			case 'B1':
				this.setState({allowedTests: ["Vibration", "Radiation"]});
				break;
			case 'C1':
				this.setState({allowedTests: ["Thermal", "Radiation", "Humidity"]});
				break;
			case 'D1':
				this.setState({allowedTests: ["Vibration", "Thermal", "Radiation", "Humidity"]});
				break;
			case 'E1':
				this.setState({allowedTests: ["Humidity"]});
				break;
			default:
				break;
		}
	}

	getStatus() {

	}

	render() {
		return (
			<div>
				<p>
					{this.state.name}
				</p>
			</div>
		)
	}
}

export default Part;