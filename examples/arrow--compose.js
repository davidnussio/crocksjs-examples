// compose

//   compose allows you to compose two Arrows together, resulting in a
//  new Arrow that is the result of the composition.

// Arrow a b ~> Arrow b c -> Arrow a c

import log from "./log";
import Arrow from 'crocks/Arrow'

import filter from 'crocks/pointfree/filter'
import map from 'crocks/pointfree/map'

// arrFilterEven :: Arrow [ Number ]
const arrFilterEven =
  Arrow(filter(x => !(x % 2)))

// arrDoubleNumbers :: Arrow [ Number ]
const arrDoubleNumbers =
  Arrow(map(x => x * 2))

// arrLength :: Arrow [ a ] -> Number
const arrLength =
  Arrow(x => x.length)

// arrDoubleEven :: Arrow [ Number ]
const arrDoubleEven =
  arrFilterEven
    .compose(arrDoubleNumbers)

// arrEvenCount :: Arrow [ Number ] Number
const arrEvenCount =
  arrFilterEven
    .compose(arrLength)

// data :: [ Number ]
const data =
  [ 12, 2, 36, 35 ]

arrDoubleEven
  .runWith(data)
//=> [ 24, 4, 72 ]

arrEvenCount
  .runWith(data)
//=> 3