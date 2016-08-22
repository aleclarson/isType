
Validator = require "Validator"

isType = (value, type) ->

  if type instanceof Validator
    return type.test value

  if not value?
    return no

  return type is value.constructor

module.exports = isType
