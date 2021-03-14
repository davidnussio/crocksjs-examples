// map

// Used to apply transformations to values you've lifted into an Identity, map takes
//a function that it will lift into the context of the Identity and apply
//to it the wrapped value. Identity contains no behavior and will do nothing
//more than apply the value inside the Identity to the function.

// Identity a ~> (a -> b) -> Identity b

import log from "./log";
import Identity from 'crocks/Identity'
import map from 'crocks/pointfree/map'

const prod = a => b => a * b

const mapDouble = map(prod(2))

mapDouble(Identity(5))
//=> Identity 10