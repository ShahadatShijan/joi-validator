const Joi = require("joi");

const registerValidation = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org','int','edu','gov','mil'] } }).required(),
    password: Joi.string().trim().min(6).required(),
    confirmPassword: Joi.ref("password"),
    age: Joi.number().required(),
    languages : Joi.array().items(Joi.string()).required(),
    dob: Joi.date().greater(new Date("1990-12-23")).required()
})

const loginValidation= Joi.object({
    email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org','int','edu','gov','mil'] } }).required(),
    password: Joi.string().trim().min(6).required()
})

module.exports = {registerValidation,loginValidation};
