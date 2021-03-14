// contramap

//   When using contramap on an Arrow, a function can be lifted that will map a
//  given type into the type required for the original Arrow's input. This allows
//  for "adaption" of given Arrow's input for better reuse. The resulting type of
//  the lifted function must match the input type of the Arrow.

// Arrow a b ~> (c -> a) -> Arrow c b

import log from "./log";
import Arrow from 'crocks/Arrow'

import chain from 'crocks/pointfree/chain'
import compose from 'crocks/helpers/compose'
import getProp from 'crocks/Maybe/getProp'
import isNumber from 'crocks/predicates/isNumber'
import option from 'crocks/pointfree/option'
import safe from 'crocks/Maybe/safe'

// getValue :: (String, Number) -> a -> Number
const getValue = (key, def) => compose(
  option(def),
  chain(safe(isNumber)),
  getProp(key)
)

// arrAdd10 :: Arrow Number
const arrAdd10 =
  Arrow(x => x + 10)

// arrAdd10Value :: Arrow Object Number
const arrAdd10Value =
  arrAdd10
    .contramap(getValue('value', 0))

arrAdd10
  .runWith(23)
//=> 33

arrAdd10Value
  .runWith({ value: 23 })
//=> 33

arrAdd10Value
  .runWith({ value: '23' })
//=> 10

arrAdd10Value
  .runWith({ num: 23 })
//=> 10