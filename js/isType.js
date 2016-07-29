var Validator, checkTypes, isType;

Validator = require("Validator");

isType = function(value, type) {
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

module.exports = isType;

checkTypes = function(value, types) {
  var index, numTypes, type;
  numTypes = types.length;
  index = -1;
  while (++index < numTypes) {
    type = types[index];
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

//# sourceMappingURL=map/isType.map
