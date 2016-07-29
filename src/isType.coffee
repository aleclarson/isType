
Validator = require "Validator"

isType = (value, type) ->

  if type instanceof Validator
    return type.test value

  if Array.isArray type
    return checkTypes value, type

  if not value?
    return no

  return type is value.constructor

module.exports = isType

#
# Helpers
#

checkTypes = (value, types) ->
  numTypes = types.length

  index = -1
  while ++index < numTypes
    type = types[index]

    if type instanceof Validator
      return yes if type.test value

    if value?
      return yes if type is value.constructor

  return no
