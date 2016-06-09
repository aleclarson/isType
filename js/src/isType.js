var Validator, checkTypes, isType;

Validator = require("Validator");

module.exports = isType = function(value, type) {
  if (type instanceof Validator) {
    return type.test(value);
  }
  if (Array.isArray(type)) {
    return checkTypes(value, type);
  }
  if (value == null) {
    return false;
  }
  return type === value.constructor;
};

checkTypes = function(value, types) {
  var i, len, type;
  for (i = 0, len = types.length; i < len; i++) {
    type = types[i];
    if (type instanceof Validator) {
      if (type.test(value)) {
        return true;
      }
    }
    if (value != null) {
      if (type === value.constructor) {
        return true;
      }
    }
  }
  return false;
};

//# sourceMappingURL=../../map/src/isType.map
