import { exact, arrayOf,  shape, number, string } from "prop-types";
import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { fetchResponse } from "services/fetchResponse";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";

export class ImageGallery extends Component {

	state = {
		searchList: [],
		page: 1,
		isLoad: false,
	}

	onIncrementPage = ({ page }) => {
		this.setState({ page });
	}

	async componentDidUpdate(prevProps, prevState) {
		const prevValue = prevProps.searchQuery;
		const nextValue = this.props.searchQuery;
		try {
			const isRepeat = prevValue !== nextValue && nextValue !== "";
			const updatePage = this.state.page > prevState.page;

			if (isRepeat || updatePage) {
				this.setState({ isLoad: true });
				const page = this.state.page;
				const newList = await fetchResponse(nextValue, page);

				this.setState(({ searchList }) => ({
					searchList: [
						...searchList,
						...newList,
					]
				}));
				this.setState({ isLoad: false });
			}
		} catch (error) {
			this.setState({ isLoad: false });
			console.log(error);
		}
	}

	render() {
		const { searchList, isLoad } = this.state;

		return (
			<>
				{(searchList.length === 0 && isLoad) && <Loader />}
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
						{isLoad && <Loader />}
						<Button incrementPage={this.onIncrementPage} />
					</>
				}
			</>
		)
	}
}

ImageGallery.propTypes = {
	state: exact({
		searchList: arrayOf(shape({
			id: number,
			largeImageURL: string,
			webformatURL: string,
			user: string,
		})),
		page: number.isRequired
	})
}