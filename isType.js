
var Validator = require('Validator');

function isType(value, type) {

  if (type instanceof Validator) {
    return type.test(value);
  }

  if (value == null) {
    return false;
  }

  return type === value.constructor;
}

module.exports = isType
