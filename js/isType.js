var Validator, isType;

Validator = require("Validator");

isType = function(value, type) {
  if (type instanceof Validator) {
    return type.test(value);
  }
  if (value == null) {
    return false;
  }
  return type === value.constructor;
};

module.exports = isType;

//# sourceMappingURL=map/isType.map
