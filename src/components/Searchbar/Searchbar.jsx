import { func } from "prop-types";
import { SearchForm } from "components/SearchForm/SearchForm";

export const Searchbar = ({ onSubmit }) => {

	return (
		<div className="Searchbar">
			<SearchForm onSubmit={onSubmit} />
		</div>
	)
}

Searchbar.propTypes = {
	onSubmit: func.isRequired,
}