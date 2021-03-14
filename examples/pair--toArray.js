// toArray

// While both undefined and undefined can be used to extract specific
//values out of the structure of Pair, toArray extracts values but
//maintains the structure. Taking nothing as its input, toArray will return
//an Array of two values. The first value in the Pair will occupy the undefined
//index, while the undefined index will house the second.

// Pair a b ~> () -> [ a, b ]

import log from "./log";
import Pair from 'crocks/Pair'
import compose from 'crocks/helpers/compose'

// toArray :: Pair a b -> [ a, b ]
const toArray =
  x => x.toArray()

// toObject :: [ a, b ] -> Object
const toObject =
  ([ left, right ]) => ({ left, right })

// pairToObject :: Pair a b -> Object
const pairToObject =
  compose(toObject, toArray)

// m :: Pair String Number
const m =
  Pair('a', 1)

m.toArray()
//=> [ 'a', 1 ]

pairToObject(m)
//=> { left: 'a', right: 1 }