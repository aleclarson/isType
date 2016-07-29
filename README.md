
# isType 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Returns `true` if the value's type is the given type.

Also compatible with any [`Validator`](https://github.com/aleclarson/Validator).

```coffee
isType = require "isType"

isType 0, Number                # => true

isType [], Array                # => true

isType null, Null               # => true

isType true, [ Boolean, Void ]  # => true
```
