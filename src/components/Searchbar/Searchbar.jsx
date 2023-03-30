import { Component } from "react";
import { Field, Form, Formik } from 'formik';

const initialValues = { searchQuery: '' };

export class Searchbar extends Component {

	submitForm = (values, { resetForm }) => {
		this.props.onSubmit(values);
		resetForm();
	}

	render() {
		return (
			<>
				<Formik
					initialValues={initialValues}
					onSubmit={this.submitForm}
				>
					<Form>
						<Field type="text" name="searchQuery" />
						<button type="submit">Submit</button>
					</Form>
				</Formik>
			</>
		)
	}
}