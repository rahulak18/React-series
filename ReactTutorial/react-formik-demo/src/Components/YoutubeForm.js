import React from 'react';
import { useFormik } from 'formik';

const YoutubeForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '', // key property name must be match with the name attribute value of the input fields
            email: '',
            channel: ''
        }
    });

    console.log("values : ", formik.values);

    return (
        <div>
            <form>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} />

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
