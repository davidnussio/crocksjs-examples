// ap

// ap allows for values wrapped in an Identity to be applied to functions also
//wrapped in an Identity. In order to use ap, the Identity must contain a
//function as its value. Under the hood, ap unwraps both the function
//and the value to be applied and applies the value to the function. Finally it
//will wrap the result of that application back into an Identity. It is required
//that the inner function is curried.

// Identity (a -> b) ~> Identity a -> Identity b

import log from "./log";
import Identity from 'crocks/Identity'

const prod = a => b => a * b
const double = prod(2)

Identity(double)
  .ap(Identity(5))
//=> Identity 10