import { exact, arrayOf,  shape, number, string } from "prop-types";
import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { fetchResponse } from "services/fetchResponse";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import { ErrorMEssage } from "components/ErrorMEssage/ErrorMEssage";

export class ImageGallery extends Component {

	state = {
		searchList: [],
		page: 1,
		isLoad: false,
		error: null,
	}

	onIncrementPage = ({ page }) => {
		this.setState({ page });
	}

	async componentDidUpdate(prevProps, prevState) {
		const prevValue = prevProps.searchQuery;
		const nextValue = this.props.searchQuery;
		const page = this.state.page;
		try {
			const isRepeat = prevValue !== nextValue && nextValue !== "";
			const updatePage = page > prevState.page;
			
			if (isRepeat) {
				this.setState({ isLoad: true });
				const searchList = await fetchResponse(nextValue, page);
				this.setState({ searchList });
				this.setState({ isLoad: false });
			}

			if (updatePage) {
				this.setState({ isLoad: true });
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
			this.setState({ error: error.config.url });
			console.log(error.name);
		}
	}

	render() {
		let { searchList, isLoad, error } = this.state;
		if (error) {
			error = error.split(/[q=?]/).join("");
		}

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
				{
					error &&
					<ErrorMEssage error={error} />
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