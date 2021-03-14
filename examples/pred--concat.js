// concat

// concat is used to combine two Semigroups of the same type under an operation
//specified by the Semigroup. In the case of Pred, the results of
//both Predss are combined under logical conjunction.

// Pred a ~> Pred a -> Pred a

import log from "./log";
import Pred from 'crocks/Pred'

import or from 'crocks/logic/or'
import not from 'crocks/logic/not'
import filter from 'crocks/pointfree/filter'

const isEven =
  x => !(x % 2)

// isOdd :: Pred Number
const isOdd =
  Pred(not(isEven))

// lt20 :: Pred Number
const lt20 =
  Pred(x => x < 20)

// gt5 :: Pred Number
const gt5 =
  Pred(x => x > 5)

// inRange :: Pred Number
const inRange =
  lt20.concat(gt5)

// isOddInRange :: Pred Number
const isOddInRange =
  isOdd.concat(inRange)

// isValid :: Pred Number
const isValid =
  Pred(or(isEven, isOddInRange))

// data :: [ Number ]
const data =
[ 1, 4, 12, 19, 32, 99, 76, 7 ]

isOdd
  .runWith(5)
//=> true

isOdd
  .runWith(8)
//=> false

filter(isOdd, data)
//=> [ 1, 19, 99, 7 ]

filter(lt20, data)
//=> [ 1, 4, 12, 19, 7 ]

filter(gt5, data)
//=> [ 12, 19, 32, 99, 76, 7 ]

filter(inRange, data)
//=> [ 12, 19, 7 ]

filter(isOddInRange, data)
//=> [ 19, 7 ]

filter(isEven, data)
// [ 4, 12, 32, 76 ]

filter(isValid, data)
//=> [ 4, 12, 19, 32, 76, 7 ]