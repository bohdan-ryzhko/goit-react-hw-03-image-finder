import { exact, number } from "prop-types";
import { Component } from "react";

export class Button extends Component {

	state = {
		page: 2,
	}

	onIncrementPage = () => {
		this.setState(({ page }) => ({ page: page + 1 }));
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

Button.propTypes = {
	state: exact({
		perPage: number.isRequired,
	})
}