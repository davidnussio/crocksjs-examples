// chain

// Normally one of the ways Monads like Identity are able to be combined and 
//have their effects applied is through chain. However Identity is different
//because there are no effects to apply. chain will simply take a function that 
//returns Identity and applies it to its value.

// Identity a ~> (a -> Identity b) -> Identity b

import log from "./log";
import Identity from 'crocks/Identity'
import compose from 'crocks/helpers/compose'
import chain from 'crocks/pointfree/chain'

const prod = a => b => a * b
const doubleAsIdentity = compose(Identity, prod(2))

doubleAsIdentity(21)
//=> Identity 42

chain(doubleAsIdentity, Identity(5))
//=> Identity 10