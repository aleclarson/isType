
getConstructor = require "getConstructor"
Validator = require "Validator"

module.exports =
isType = (value, type) ->

  if Array.isArray type
    return yes for subtype in type when isType value, subtype
    return no

  if type instanceof Validator
    return type.test value

  unless value?
    return no

  return type is getConstructor value
