const checkValidation = (schema) => {
  let joiValidation = (req, res, next) => {
    let { error } = schema.validate(req.body, {abortEarly: false});
    if (error) {
      const {details}=error
      let alertMessage = "Details:\n";
      details.forEach(function(detail) {
        alertMessage += "- " + detail.message + "\n";
      });
      res.status(422).send({stack: "ERROR_VALIDATION", data: { error: alertMessage }})
    } else {
      next();
    }
  };
  return joiValidation;
}

export { checkValidation };