import PropTypes from "prop-types";
import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { fetchResponse } from "services/fetchResponse";

export class ImageGallery extends Component {

	state = {
		searchList: [],
	}

	async componentDidUpdate(prevProps) {
		const prevValue = prevProps.searchQuery;
		const nextValue = this.props.searchQuery;
		if (prevValue !== nextValue && nextValue !== "") {
			const searchList = await fetchResponse(nextValue);
			this.setState({ searchList });
		}
	}

	render() {
		const { searchList } = this.state;
		return (
			<>
				{
					searchList.length > 0 &&
					<ul className="ImageGallery">
						{
							searchList.map(({ id, largeImageURL, webformatURL, user }) =>
								<ImageGalleryItem
									key={id}
									largeImageURL={largeImageURL}
									webformatURL={webformatURL}
									user={user}
								/>
							)
						}
					</ul>
				}
			</>
		)
	}
}

ImageGallery.propTypes = {
	searchList: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		largeImageURL: PropTypes.string,
		webformatURL: PropTypes.string,
		user: PropTypes.string,
	}))
}