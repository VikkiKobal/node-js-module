const Joi = require('joi');

const carSchema = Joi.object({
    licensePlate: Joi.string()
        .pattern(/^[A-Z0-9]{1,10}$/)
        .required()
        .messages({
            'string.empty': 'License plate cannot be empty.',
            'string.pattern.base': 'License plate must be alphanumeric and no more than 10 characters.',
            'any.required': 'License plate is required.'
        }),

    year: Joi.number()
        .integer()
        .min(1886)
        .max(new Date().getFullYear())
        .required()
        .messages({
            'number.base': 'Year must be a number.',
            'number.min': 'Year must be greater than or equal to 1886.',
            'number.max': `Year must be less than or equal to ${new Date().getFullYear()}.`,
            'any.required': 'Year is required.'
        }),

    make: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.empty': 'Make cannot be empty.',
            'string.min': 'Make must be at least 2 characters long.',
            'string.max': 'Make cannot be longer than 50 characters.',
            'any.required': 'Make is required.'
        }),

    color: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.empty': 'Color cannot be empty.',
            'string.min': 'Color must be at least 3 characters long.',
            'string.max': 'Color cannot be longer than 30 characters.',
            'any.required': 'Color is required.'
        }),

    condition: Joi.string()
        .valid('new', 'used', 'certified')
        .required()
        .messages({
            'string.empty': 'Condition cannot be empty.',
            'any.only': 'Condition must be one of: new, used, certified.',
            'any.required': 'Condition is required.'
        }),

    ownerLastName: Joi.string()
        .min(2)
        .max(100)
        .required()
        .messages({
            'string.empty': 'Owner last name cannot be empty.',
            'string.min': 'Owner last name must be at least 2 characters long.',
            'string.max': 'Owner last name cannot be longer than 100 characters.',
            'any.required': 'Owner last name is required.'
        }),

    ownerAddress: Joi.string()
        .min(5)
        .max(200)
        .required()
        .messages({
            'string.empty': 'Owner address cannot be empty.',
            'string.min': 'Owner address must be at least 5 characters long.',
            'string.max': 'Owner address cannot be longer than 200 characters.',
            'any.required': 'Owner address is required.'
        })
});

module.exports = carSchema;
