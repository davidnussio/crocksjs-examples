// concat

// When an underlying value of a given Result is fixed to a Semigroup, concat can
//be used to concat another Result instance with an underlying Semigroup of
//the same type. Expecting a Result wrapping a Semigroup of the same
//type, concat will give back a new Result instance wrapping the result of
//combining the two underlying Semigroups. When called on
//a undefined instance, concat will return an undefined with the value
//of the first undefined in the chain.

// Semigroup s => Result e s ~> Result e s -> Result e s

import log from "./log";
import Result from 'crocks/Result'

import concat from 'crocks/pointfree/concat'

const { Ok, Err } = Result

Ok([ 1, 2, 3 ])
  .concat(Ok([ 4, 5, 6 ]))
//=> [ 1, 2, 3, 4, 5, 6 ]

Ok([ 1, 2, 3 ])
  .concat(Err([ 4, 5, 6 ]))
//=> Err [ 4, 5, 6 ]

concat(Ok('Result'), Err('Error'))
//=> Err "Error"

concat(Err('Error'), Ok('Result'))
//=> Err "Error"

concat(Err('Error 1'), Err('Error 2'))
//=> Err "Error 2"