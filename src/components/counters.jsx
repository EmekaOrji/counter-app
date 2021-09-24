import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
	state = {
		counters: [
			{ id: 1, value: 2 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		],
	};

	deleteCounter = (counterId) => {
		console.log("Counter Deleted", counterId);
	};

	render() {
		return (
			<div>
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={this.deleteCounter}
						value={counter.value}
            id={counter.id}>
						<h6>Counter #{counter.id} </h6>
					</Counter>
				))}
			</div>
		);
	}
}

export default Counters;
