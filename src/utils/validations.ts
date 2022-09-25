import { ContactsBase } from './../interfaces/api/contacts.interface';
import { ValidationErrors } from 'constants/errors';
import { LoginPayload } from 'interfaces/api/profile.interfaces';
import * as yup from 'yup';
import type { SchemaOf } from 'yup';

export const loginSchema: SchemaOf<LoginPayload> = yup.object().shape({
  email: yup.string().trim().required(ValidationErrors.Required),
  password: yup.string().trim().required(ValidationErrors.Required),
});

export const contactsFormScheme: SchemaOf<ContactsBase> = yup.object().shape({
  firstName: yup.string().trim().required(ValidationErrors.Required),
  lastName: yup.string().trim().required(ValidationErrors.Required),
  patronymic: yup.string().trim().required(ValidationErrors.Required),
  age: yup.number().typeError(ValidationErrors.Required).required(ValidationErrors.Required),
});
