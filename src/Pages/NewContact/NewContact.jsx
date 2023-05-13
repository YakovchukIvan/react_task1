// css
import './NewContact.scss'

// valid
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {validationSchema} from '../../validation/Validation'

// for id
import {v4 as uuidv4} from 'uuid'

// router-dom
import { useNavigate } from 'react-router-dom'





const NewContact = () => {
    const initialValues = {
        id: uuidv4(),
        name: '',
        phone: '',
        email: '',
        avatar: '',
        gender: '',
        status: '',
        favorite: ''
    }

    const navigate = useNavigate();
    const handleSubmit = (values) => {
        console.log(values);
        navigate('/');
    }


    return (
        <>
        <h2>New Contact</h2>
            <div className="registrationForm">

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({isSubmitting}) => (
                        <Form>
                            <div>
                                <label htmlFor='name'>Name</label>
                                <Field type='text' name='name'/>
                                <ErrorMessage name='name' />
                            </div>

                            <div>
                                <label htmlFor='phone'>Phone</label>
                                <Field type='text' name='phone' />
                                <ErrorMessage name='phone' />
                            </div>

                            <div>
                                <label htmlFor='email'>Email</label>
                                <Field type='email' name='email'/>
                                <ErrorMessage name='email' />
                            </div>

                            <div>
                                <label htmlFor='avatar'>Avatar</label>
                                <Field type='file' name='avatar'/>
                                <ErrorMessage name='avatar' />
                            </div>

                            <div>
                                <label htmlFor='gender'>Gender</label>
                                <Field as='select' name='gender'>
                                    <option value="">Choose gender</option>
                                    <option value="Men">Men</option>  
                                    <option value="Women">Women</option>    
                                </Field>
                                <ErrorMessage name='gender' />
                            </div>

                            <div>
                                <label htmlFor='status'>Status</label>
                                <Field as='select' name='status'>
                                    <option value="">Choose status</option>
                                    <option value="Work">Work</option>  
                                    <option value="Family">Family</option>
                                    <option value="Private">Private</option>    
                                    <option value="Friends">Friends</option>        
                                </Field>
                                <ErrorMessage name='status' />
                            </div>

                            <div>
                                <label htmlFor='favorite'>Favorite</label>
                                <Field type='checkbox' name='favorite' />
                            </div>
                            <button type='submit' className="btn btn-primary btn-lg" disabled={isSubmitting}>Add</button>
                        </Form>
                        )           
                    }
                </Formik>

                





            </div>
        </>
    )
}

export default NewContact