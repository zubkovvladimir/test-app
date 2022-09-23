import { ValidationErrors } from 'constants/errors';
import { LoginPayload } from 'interfaces/api/profile.interfaces';
import * as yup from 'yup';
import type { SchemaOf } from 'yup';

export const loginSchema: SchemaOf<LoginPayload> = yup.object().shape({
  email: yup.string().trim().required(ValidationErrors.Required),
  password: yup.string().trim().required(ValidationErrors.Required),
});
