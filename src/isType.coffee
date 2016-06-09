
Validator = require "Validator"

module.exports =
isType = (value, type) ->

  if type instanceof Validator
    return type.test value

  if Array.isArray type
    return checkTypes value, type

  if not value?
    return no

  return type is value.constructor

checkTypes = (value, types) ->

  for type in types

    if type instanceof Validator
      return yes if type.test value

    if value?
      return yes if type is value.constructor

  return no
