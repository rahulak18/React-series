import React from 'react';
import { useFormik } from 'formik';

const YoutubeForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '', // key property name must be match with the name attribute value of the input fields
            email: '',
            channel: ''
        },
        onSubmit: values => {
            console.log("values : ", values);
        },
        validate: values => {

            let errors = {};

            if (!values.name) {
                errors.name = 'Required'
            }

            if (!values.email) {
                errors.email = 'Required'
            }

            if (!values.channel) {
                errors.channel = 'Required'
            }
            return errors;
        }
    });

    console.log("Formiks errors : ", formik.errors); // using this errors in the jsx conditionally to display the error message

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} />

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
