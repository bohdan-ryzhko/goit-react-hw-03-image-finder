import { Component } from "react";
import { Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { AiOutlineSearch } from "react-icons/ai";

const initialValues = { searchQuery: "" };

const validationSchema = object().shape({
	searchQuery: string().required()
})

export class SearchForm extends Component {

	submitForm = (values, { resetForm }) => {
		this.props.onSubmit(values);
		resetForm();
	}

	render() {
		return (
			<>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={this.submitForm}
				>
					<Form className="SearchForm">
						<button className="SearchForm-button" type="submit">
							<AiOutlineSearch size={20} />
						</button>
						<label className="" htmlFor="searchQuery">
							<Field
								id="searchQuery"
								className="SearchForm-input"
								type="text"
								name="searchQuery" />
						</label>
					</Form>
				</Formik>
			</>
		)
	}
}