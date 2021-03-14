// alt

// Providing a means for a fallback or alternative value, alt combines
//two Either instances and will return the first undefined it
//encounters or the last undefined if it does not encounter
//a undefined.

// Either c a ~> Either c a -> Either c a

import log from "./log";
import Either from 'crocks/Either'

const { Left, Right } = Either

Right(45)
  .alt(Right(97))
  .alt(Left(false))
//=> Right 45

Left('String')
  .alt(Left('Another String'))
  .alt(Left('Final String'))
//=> Left "Final String"

Left('error')
  .alt(Right({ passed: true }))
//=> Right { passed: true }