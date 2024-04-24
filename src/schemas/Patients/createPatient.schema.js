import Joi from "joi";

const createSchema = Joi.object({
    firt_name: Joi.string()
        .min(3)
        .max(50)
        .required(),
    last_name: Joi.string()
        .min(3)
        .max(50)
        .required(),
    type_doc: Joi.string()
        .alphanum()
        .min(2)
        .required(),
    document:Joi.string()
        .min(5)
        .max(11)
        .required(),
    birthday:Joi.string()
        .optional(),
    phone:Joi.string()
        .alphanum()
        .min(10)
        .max(10)
        .required(),
    landline:Joi.string()
        .alphanum()
        .min(7)
        .max(7)
        .required(),
    occupation:Joi.string()
        .min(3)
        .max(80)
        .required(),
    address:Joi.string()
        .min(3)
        .max(100)
        .required(),
    entity:Joi.string()
        .required(),
    type_attention:Joi.string()
        .required(),
    status:Joi.string()
        .required(),
});

export {createSchema}