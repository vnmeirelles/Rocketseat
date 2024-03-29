import { ValidationError } from 'yup';
import { string } from 'yup/lib/locale';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    // validationErrors[String(error.path)] = error.message;
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
