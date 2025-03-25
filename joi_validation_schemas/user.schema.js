const Joi = require('joi');

const userSchema = Joi.object({
    // Ім'я користувача
    firstName: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.empty': 'First name cannot be empty.',
            'string.min': 'First name must be at least 2 characters long.',
            'string.max': 'First name cannot be longer than 50 characters.',
            'any.required': 'First name is required.'
        }),

    // Прізвище користувача
    lastName: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.empty': 'Last name cannot be empty.',
            'string.min': 'Last name must be at least 2 characters long.',
            'string.max': 'Last name cannot be longer than 50 characters.',
            'any.required': 'Last name is required.'
        }),

    // Адреса електронної пошти
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.empty': 'Email cannot be empty.',
            'string.email': 'Email must be a valid email address.',
            'any.required': 'Email is required.'
        }),

    // Пароль користувача
    password: Joi.string()
        .min(8)
        .max(100)
        .required()
        .messages({
            'string.empty': 'Password cannot be empty.',
            'string.min': 'Password must be at least 8 characters long.',
            'string.max': 'Password cannot be longer than 100 characters.',
            'any.required': 'Password is required.'
        }),

    // Підтвердження пароля
    confirmPassword: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .messages({
            'any.only': 'Passwords must match.',
            'any.required': 'Confirm password is required.'
        }),

    // Дата народження користувача
    birthDate: Joi.date()
        .less('now')
        .required()
        .messages({
            'date.base': 'Birth date must be a valid date.',
            'date.less': 'Birth date must be before the current date.',
            'any.required': 'Birth date is required.'
        }),

    // Номер телефону
    phone: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .messages({
            'string.empty': 'Phone number cannot be empty.',
            'string.pattern.base': 'Phone number must be 10 digits.',
            'any.required': 'Phone number is required.'
        }),

    // Адреса користувача
    address: Joi.string()
        .min(5)
        .max(200)
        .required()
        .messages({
            'string.empty': 'Address cannot be empty.',
            'string.min': 'Address must be at least 5 characters long.',
            'string.max': 'Address cannot be longer than 200 characters.',
            'any.required': 'Address is required.'
        })
});

module.exports = userSchema;
