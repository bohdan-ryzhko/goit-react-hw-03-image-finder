import { string } from "prop-types";

export const ImageGalleryItem = ({ largeImageURL, user, webformatURL }) => {
	return (
		<li className="ImageGalleryItem">
			<img className="ImageGalleryItem-image" src={largeImageURL} height={300} alt={user} />
		</li>
	)
}

ImageGalleryItem.propTypes = {
	largeImageURL: string.isRequired,
	user: string.isRequired,
	webformatURL: string,
}