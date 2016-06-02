
getConstructor = require "getConstructor"
Validator = require "Validator"

module.exports =
isType = (value, type) ->

  if Array.isArray type
    return isTypeish value, type

  if type instanceof Validator
    return type.test value

  unless value?
    return no

  return type is getConstructor value

isTypeish = (value, types) ->
  return yes for type in types when isType value, type
  return no
