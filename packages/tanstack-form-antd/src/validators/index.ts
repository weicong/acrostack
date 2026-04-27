import { compose, email, maxLength, minLength, pattern, required } from "./builtInValidators";

export const validators = {
  required,
  minLength,
  maxLength,
  pattern,
  email,
  compose,
};
