import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const YoutubeForm = () => {

    const validateSchema = Yup.object({
        name: Yup.string().required('It is a required field!'),
        email: Yup.string().email('Invalid email format man').required('It is a required field!'),
        channel: Yup.string().required('It is a required field!')
    })

    const formik = useFormik({
        initialValues: {
            name: '', // key property name must be match with the name attribute value of the input fields
            email: '',
            channel: ''
        },
        onSubmit: values => {
            console.log("values : ", values);
        },
        validationSchema: validateSchema
        // validationSchema  -> we can write this only instead of the above line if the Yup object defined named is validationSchema (which is a ES6 syntax/feature)

    });

    console.log("Formik touched/visited fields : ", formik.touched); // gives the visited field in object with the property value as true if it is visited and blurred (we can use this formik.error to show error message, if that field value is required and user didnt entered values and moves to other field)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    {...formik.getFieldProps('name')}
                />

                <label htmlFor='email'>E-mail</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    {...formik.getFieldProps('email')}
                />

                <label htmlFor='channel'>Channel</label>
                <input type='text'
                    id='channel'
                    name='channel'
                    {...formik.getFieldProps('channel')}
                />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
