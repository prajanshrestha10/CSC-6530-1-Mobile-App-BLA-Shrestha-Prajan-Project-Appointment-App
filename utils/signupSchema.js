import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required.')
        .email('Invalid email format.'),
    password: Yup.string()
        .required('Password is required.')
        .min(6, "Password must be at least 6 characters long.")
        .matches(/[0-9]/, 'Password must contain at least one number.')
        .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character.')
});

export default validationSchema;