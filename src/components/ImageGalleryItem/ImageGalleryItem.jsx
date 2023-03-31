import { string } from "prop-types";
import { Modal } from "components/Modal/Modal";
import { Component } from "react";

export class ImageGalleryItem extends Component {

	state = {
		onModal: false,
	}

	handleModal = (value) => (event) => {
		if (value) {
			this.setState({ onModal: value.onModal });
			return;
		}
		if (this.state.onModal) {
			if (event.target) {
				if (event.target.nodeName === "IMG") {
					return;
				}
			}
		}
		this.setState(({ onModal }) => ({ onModal: !onModal }));
	}

	render() {
		const { largeImageURL, user, webformatURL } = this.props;
		const { onModal } = this.state;

		return (
			<>
				<li onClick={this.handleModal()} className="ImageGalleryItem">
					<img className="ImageGalleryItem-image" src={webformatURL} height={300} alt={user} />
				</li>
				{
					onModal &&
					<Modal onCloseModal={this.handleModal} imageUrl={largeImageURL} user={user} />
				}
			</>
			
		)
	}
}

ImageGalleryItem.propTypes = {
	largeImageURL: string.isRequired,
	user: string.isRequired,
	webformatURL: string,
}