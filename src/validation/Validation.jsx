import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        phone: Yup.string().required('Phone is required'),
        email: Yup.string().email('invalid email').required('Email is required'),
        // avatar: Yup.string().url('Invalid URL').required('Avatar is required'),
        avatar: Yup.mixed().required('Avatar is required'),
        gender: Yup.string().oneOf(['Men', 'Women'],'Invalid gender').required('Gender is required'),
        status: Yup.string().oneOf(['Work', 'Family', 'Private', 'Friends'],'Invalid status').required('Status is required'),
        favorite: Yup.boolean()
    })