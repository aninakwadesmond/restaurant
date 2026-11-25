const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const complexityOptions = {
  min: 3,
  max: 255,
  symbol: 1,
  upperCase: 1,
  lowerCase: 1,
  symbol: 1,
  numeric: 1,
  requirementCount: 2,
};

function validateUser(body) {
  const userSchema = Joi.object({
    fullName: Joi.string()
      .trim()
      .min(2)
      .max(59)
      .required()
      .pattern(/^[a-zA-Z\s'-]+$/)
      .messages({
        'string.empty': 'Fullname is required',
        'string.min': 'fullname must contain at least 2 characters',
        'string.max': 'fullname cannot exceed 50 characters',
        'string.pattern.base': 'fullname contains invalid characters',
        'any.required': 'fullName required',
      }),

    email: Joi.string()
      .trim()
      .lowercase()
      .email({ tlds: { allow: false } })
      .max(254)
      .required()
      .messages({
        'string.empty': 'Email address is required',
        'string.email': 'Enter a valid email address',
        'string.max': 'Enter address is too long',
        'any.required': 'Email address is required',
      }),
    phoneNumber: Joi.string()
      .trim()
      .pattern(/^(0[25]\d{8}|\+233[25]\d{8})$/)
      .required()
      .messages({
        'string.empty': 'Phone number is required',
        'string.pattern.base':
          'Enter a valid Ghanaian phone number, e.g. 0248490032 or +233248490032',
        'any-required': 'Phone number is required',
      }),
    password: passwordComplexity(complexityOptions),

    ghanaCard: Joi.string()
      .trim()
      .pattern(/^GHA-\d{9}-\d$/)
      .required()
      .messages({
        'string.empty': 'Ghana card number is required',
        'string.pattern.base':
          'Enter a valid Ghana Card number, e.g. GHA-123456789-0',
        'any.required': 'Ghana card is required',
      }),
    // .
    // error(
    //   () =>
    //     new Error(
    //       'Password must be 10-64 characters long and conntain at least one uppercase letter , one lowecase letter, one number and one special charater.',
    //     ),
    // ),
  });

  return userSchema.validate(body, {
    abortEarly: false,
    stripUnknown: true,
    convert: true,
  });
}

function validateUserLogin(body) {
  const schema = Joi.object({
    email: Joi.string()
      .trim()
      .required()
      .email({ tlds: { allow: false } })
      .max(256)
      .messages({
        'string.empty': 'Email field is required',
        'string.email': 'Email field must be emial typed',
        'string.max': 'Email cannot exceed 256 characters',
        'any.required': 'Email field is required',
      }),
    password: passwordComplexity(complexityOptions),
    ghanaCard: Joi.string()
      .trim()
      .pattern(/^GHA-\d{9}-\d$/)
      .required()
      .messages({
        'string.empty': 'Ghana card number is required',
        'string.pattern.base':
          'Enter a valid Ghana card number eg GHA-123456789-0',
        'any.required': 'Ghana card number is required',
      }),
  });

  return schema.validate(body, {
    abortEarly: false,
    stripUnknown: true,
    convert: true,
  });
}

module.exports = { validateUser, validateUserLogin };
