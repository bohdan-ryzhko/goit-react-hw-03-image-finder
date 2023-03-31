import { Component } from "react";

export class Modal extends Component {

	state = {
		onModal: false,
	}

	onPressESC = ({ code }) => {
		if (code === "Escape") {
			this.props.onCloseModal(this.state)();
		}
	}

	componentDidMount() {
		window.addEventListener("keydown", this.onPressESC);
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.onPressESC);
	}

	render() {
		return (
			<div onClick={this.props.onCloseModal()} className="Overlay">
				<div className="Modal">
					<img src={this.props.imageUrl} alt={this.props.user} />
				</div>
			</div>
		)
	}
}