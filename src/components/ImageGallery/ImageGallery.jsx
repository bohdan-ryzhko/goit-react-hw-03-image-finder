import PropTypes from "prop-types";
import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { fetchResponse } from "services/fetchResponse";
import { Button } from "components/Button/Button";

export class ImageGallery extends Component {

	state = {
		searchList: [],
		perPage: this.props.perPage,
	}

	async componentDidUpdate(prevProps) {
		const prevValue = prevProps.searchQuery;
		const nextValue = this.props.searchQuery;
		try {
			if (prevValue !== nextValue && nextValue !== "") {
				const perPage = this.props.perPage;
				const searchList = await fetchResponse(nextValue, perPage);
				this.setState({ searchList });
			}
		} catch (error) {
			console.log(error);
		}
	}

	async shouldComponentUpdate(nextProps) {
		try {
			if (nextProps.perPage > this.state.perPage) {
				const perPage = this.props.perPage;
				const nextValue = this.props.searchQuery;
				const searchList = await fetchResponse(nextValue, perPage);
				this.setState({ searchList });
			}
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const { searchList } = this.state;
		return (
			<>
				{
					searchList.length > 0 &&
				<>
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
						<Button incrementPage={this.props.incrementPage} />
					</>
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