import React, { Component } from 'react';
import Part from '../part/Part';

class Machine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: this.props.type,
			currentParts: this.props.parts
		}
	}
	componentDidMount() {
    console.log(this.state.currentParts)
  }
	render() {
		return (
			<div className="Machine">
				<p>
					{this.state.type}
				</p>
				<div>
					{/* {this.state.currentParts.map((part, index) => {
						return <Part type="Some Name"/>
					})} */}
				</div>
			</div>
		)
	}
}

export default Machine;