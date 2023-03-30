import { Component } from "react";

export class Button extends Component {

	state = {
		perPage: 24,
	}

	onIncrementPage = () => {
		this.setState(prevState => ({
			perPage: prevState.perPage + 12,
		}));
		this.props.incrementPage(this.state);
	}

	render() {
		return <button
			onClick={this.onIncrementPage}
			className="Button"
			type="button"
		>
			Load more
		</button>
	}
}