var Validator, getConstructor, isType, isTypeish;

getConstructor = require("getConstructor");

Validator = require("Validator");

module.exports = isType = function(value, type) {
  if (Array.isArray(type)) {
    return isTypeish(value, type);
  }
  if (type instanceof Validator) {
    return type.test(value);
  }
  if (value == null) {
    return false;
  }
  return type === getConstructor(value);
};

isTypeish = function(value, types) {
  var i, len, type;
  for (i = 0, len = types.length; i < len; i++) {
    type = types[i];
    if (isType(value, type)) {
      return true;
    }
  }
  return false;
};

//# sourceMappingURL=../../map/src/isType.map
