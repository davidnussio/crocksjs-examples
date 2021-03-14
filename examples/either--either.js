// either

// Used as a means to map and extract a value from an Either based on the
//context, either takes two functions as its arguments. The first will map any
//undefined value in a left instance. While the second is used to map any undefined
//instance value. The function will return the result of whichever function is
//used to map.

// Either c a ~> ((c -> b), (a -> b)) -> b

import log from "./log";
import Either from 'crocks/Either'

import curry from 'crocks/helpers/curry'
import either from 'crocks/pointfree/either'
import identity from 'crocks/combinators/identity'
import objOf from 'crocks/helpers/objOf'

const { Left, Right } = Either

// toObject :: String -> Either a Object -> Object
const toObject = curry(
  key => either(objOf(key), identity)
)

toObject('num', Left(44))
//=> { num: 44 }

toObject('num', Right({ string: 'a string' }))
//=> { string: 'a string' }