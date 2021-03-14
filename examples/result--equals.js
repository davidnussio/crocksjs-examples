// equals

// Used to compare the contained values of two Result instances for equality by
//value. equals takes any given argument and returns true if the passed
//argument is a Result (undefined or undefined) with a contained value
//equal to the contained value of the Result the method is being called on. If
//the passed argument is not a Result or the contained values are not equal by
//value then equals will return false.

// Result e a ~> b -> Boolean

import log from "./log";
import Result from 'crocks/Result'

import equals from 'crocks/pointfree/equals'

const { Ok, Err } = Result

Ok('result')
  .equals(Ok('result'))
//=> true

Ok(null)
  .equals(Ok(null))
//=> true

Ok('error')
  .equals(Err('error'))
//=> false

// by value, not reference for most types
Ok([ 1, { a: 2 }, 'string' ])
  .equals(Ok([ 1, { a: 2 }, 'string' ]))
//=> true

equals(Ok('result'), 'result')
//=> false