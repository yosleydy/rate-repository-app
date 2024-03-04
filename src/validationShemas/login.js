import * as yup from 'yup'

export const loginValidationShema = yup.object().shape({
    email:yup
    .string()
    .email('Escribe un email valido')
    .required('E-mail is required'),
    password:yup
    .string()
    .min(5,'Too Shorp!')
    .max(1000,'Too long!')
    .required('Password is required')
})