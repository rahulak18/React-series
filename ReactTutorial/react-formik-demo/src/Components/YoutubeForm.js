import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const YoutubeForm = () => {

    const validateSchema = Yup.object({
        name: Yup.string().required('It is a required field!'),
        email: Yup.string().email('Invalid email format man').required('It is a required field!'),
        channel: Yup.string().required('It is a required field!')
    })

    const intialValues = {
        name: '', // key property name must be match with the name attribute value of the input fields
        email: '',
        channel: '',
        comments: '',
        address: ''
    };

    const onSubmit = values => {
        console.log("values : ", values);
    };

    return (
        <Formik
            initialValues={intialValues}
            validationSchema={validateSchema}
            onSubmit={onSubmit}>
            <Form>
                <label htmlFor='name'>Name</label>
                <Field
                    type='text'
                    id='name'
                    name='name'
                />
                <ErrorMessage name='name' />

                <label htmlFor='email'>E-mail</label>
                <Field
                    type='email'
                    id='email'
                    name='email'
                />
                <ErrorMessage name='email' />

                <label htmlFor='channel'>Channel</label>
                <Field type='text'
                    id='channel'
                    name='channel'
                    placeholder='Enter channel name'
                />
                <ErrorMessage name='channel' />

                <label htmlFor='comments'>comments</label>
                <Field type='text'
                    id='comments'
                    name='comments'
                    as='textarea' // by default it will be input field
                />
                <ErrorMessage name='channel' />

                <div>
                    <label htmlFor='address'>Address</label>
                    <Field name='channel'>
                        {
                            (props) => {
                                const { field, form, meta } = props;
                                console.log(props);
                                return (
                                    <div>
                                        <input type='text' id='address' {...field} />
                                        {meta.touched && meta.error ? <p>{meta.error}</p> : null}
                                    </div>
                                )



                            }
                        }
                    </Field>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm
