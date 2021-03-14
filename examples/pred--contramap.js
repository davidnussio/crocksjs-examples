// contramap

// While the output of a Pred is fixed to Boolean, the input can vary type and
//value. This allows a given Pred to be adapted by mapping on the input, before
//it hits the wrapped predicate function. Using contramap, functions are lifted,
//mapping the input to now accept the type of the input of the given function.

// Pred a ~> (b -> a) -> Pred b

import log from "./log";
import Pred from 'crocks/Pred'
import contramap from 'crocks/pointfree/contramap'
import getPropOr from 'crocks/helpers/getPropOr'

// Length :: String | Function | Array
// length :: Length -> Number
const length =
  getPropOr(0, 'length')

// gt5 :: Pred Number
const gt5 =
  Pred(x => x > 5)

// lengthGt5 :: Pred Length
const validLength =
  contramap(length, gt5)

// validItemLength :: Pred Object
const validItemLength =
  contramap(getPropOr(null, 'item'), validLength)

gt5
  .runWith(5)
//=> false

gt5
  .runWith(10)
//=> true

validLength
  .runWith([ 1, 2, 3, 4, 5, 6 ])
//=> true

validLength
  .runWith(null)
//=> false

validLength
  .runWith('1234')
//=> false

validItemLength
  .runWith({ item: 'this is an item' })
//=> true