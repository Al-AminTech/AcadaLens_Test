import joi from 'joi';

const signupValidation =  joi.object({
    fullName: joi.string().min(4).max(40).required(),

    Email: joi.string().email({minDomainSegments:2}).required(),

    phoneNumber: joi.number().integer().min(1000000000).max(99999999999).required(),

    // Password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    // password: joi.string().min(8).max(30).pattern(new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&#]).+$')).required(),
    password: joi.string().custom((value, helpers) => {
        if (value.length < 8) {
            return helpers.message({custom: 'Password must be at least 8 characters long.'});
        }
        if (!/[A-Z]/.test(value)) {
            return helpers.message({custom: 'Password must contain at least one uppercase letter.'});
        }
        if (!/[a-z]/.test(value)) {
            return helpers.message({custom: 'Password must contain at least one lowercase letter.'});
        }
        if (!/\d/.test(value)) {
            return helpers.message({custom: 'Password must contain at least one number.'});
        }
        if (!/[@$!%*?&#]/.test(value)) {
            return helpers.message({custom: 'Password must contain at least one special character.'});
        }
        return value;
    }),
    confirmPassword: joi.ref('password')
}).messages({
    'string.email'      :   'Please enter a valid email address',
    'any.required'      :   '{{#label}} is required',
    'string.empty'      :   'Please enter your{{#label}}',
    'string.min'        :   '{{#label}} should be more than 5 characters',
    'string.max'        :   '{{#label}} should be less tham 20 characters',
    'number.empty'      :   'please Input a valid phone number',
    'string.pattern.base':  'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.'
})

export default signupValidation
