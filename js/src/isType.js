var Validator, getConstructor, isType;

getConstructor = require("getConstructor");

Validator = require("Validator");

module.exports = isType = function(value, type) {
  var i, len, subtype;
  if (Array.isArray(type)) {
    for (i = 0, len = type.length; i < len; i++) {
      subtype = type[i];
      if (isType(value, subtype)) {
        return true;
      }
    }
    return false;
  }
  if (type instanceof Validator) {
    return type.test(value);
  }
  if (value == null) {
    return false;
  }
  return type === getConstructor(value);
};

//# sourceMappingURL=../../map/src/isType.map
