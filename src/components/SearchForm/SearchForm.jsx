import { Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { AiOutlineSearch } from "react-icons/ai";

const initialValues = { searchQuery: "" };

const validationSchema = object().shape({
	searchQuery: string().required()
})

export const SearchForm = ({ onSubmit }) => {

	const submitForm = (values, { resetForm }) => {
		onSubmit(values);
		resetForm();
	}

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={submitForm}
			>
				<Form className="SearchForm">
					<button className="SearchForm-button" type="submit">
						<AiOutlineSearch size={20} />
					</button>
					<Field
						className="SearchForm-input"
						type="text"
						name="searchQuery" />
				</Form>
			</Formik>
		</>
	)
}