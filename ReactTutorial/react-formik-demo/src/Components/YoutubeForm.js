import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
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
        address: '',
        social: {
            facebook: '',
            twitter: '',
        },
        phoneNumbers: ['', ''],
        phNums: ['']
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
                <ErrorMessage name='channel' component='div' />

                {/* component = 'div' -> wraps the content inside the div tag */}
                {/* component = {yourCustomComponentName} -> Adds/Replace your custom component in this place, use props.children in the custom component to get the error message */}
                {/* Alternate way to customize the ErrorMessageComponent is to pass as children props */}

                <label htmlFor='comments'>comments</label>
                <Field type='text'
                    id='comments'
                    name='comments'
                    as='textarea' // by default it will be input field
                />
                <ErrorMessage name='channel' >
                    {(errorMsg) => <div>{errorMsg}</div>}
                </ErrorMessage>

                <div>
                    <label htmlFor='address'>Address</label>
                    <FastField name='channel'>
                        {/* Use the form field whenever you dont want to re-render the form if any of the field changes, replace field by fastField component so that field will not rendered again unless until its value gets changed, if other value gets changes the fast field component will not get rendered again */}
                        {
                            (props) => {
                                console.log("Form render")
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
                    </FastField>
                </div>


                <label htmlFor='facebook'>facebook</label>
                <Field type='text'
                    id='facebook'
                    name='social.facebook'
                />

                <label htmlFor='twitter'>twitter</label>
                <Field type='text'
                    id='twitter'
                    name='social.twitter'
                />

                <label htmlFor='primaryPh'>Primary Phone Number</label>
                <Field type='text'
                    id='primaryPh'
                    name='phoneNumbers[0]'
                />

                <label htmlFor='secondaryPh'>secondary Phone Number</label>
                <Field type='text'
                    id='secondaryPh'
                    name='phoneNumbers[1]'
                />


                <div>
                    <label htmlFor='phNums'>List of phone numbers</label>
                    <FieldArray name='phNums'>
                        {
                            (fieldArrayProps) => {
                                console.log(fieldArrayProps);
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { phNums } = values;
                                return (
                                    <div>
                                        {phNums.map((phoneNum, index) => (
                                            <div key={index}>
                                                <Field name={`phNums[${index}]`} />
                                                {
                                                    index > 0 && (<button type='button' onClick={() => remove(index)}>{' '} - {' '}</button>)
                                                }
                                                <button type='button' onClick={() => push('')}>{' '} + {' '}</button>
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                        }
                    </FieldArray>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm
