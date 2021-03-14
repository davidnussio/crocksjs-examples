// concat

// concat is used to combine (2) Semigroups of the same type under an operation
//specified by the Semigroup. In the case of Endo, it will combine (2)
//endofunctions under function composition.

// Endo a ~> Endo a -> Endo a

import log from "./log";
import Endo from 'crocks/Endo'

import setProp from 'crocks/helpers/setProp'
import mapProps from 'crocks/helpers/mapProps'
import objOf from 'crocks/helpers/objOf'

// inc :: Number -> Number
const inc =
  x => x + 1

// incValue :: Endo Object
const incValue =
  Endo(mapProps({ value: inc }))

// addDone :: Endo Object
const addDone =
  Endo(setProp('done', true))

// finish :: Endo Object
const packResults =
  Endo(objOf('results'))

// finish :: Endo Object
const finish =
  incValue.concat(addDone)

finish.runWith({ value: 99 })
//=> { value: 100, done: true }

finish
  .concat(packResults)
  .runWith({ value: 99 })
//=> { results: { value: 100, done: true } }