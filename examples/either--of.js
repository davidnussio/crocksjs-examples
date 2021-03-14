// of

// Used to lift any value into an Either as a undefined, of is used mostly by
//helper functions that work "generically" with instances of
//either Applicative or Monad. When working specifically with
//the Either type, the undefined constructor should be used. Reach
//for of when working with functions that will work with
//ANY Applicative/Monad.

// Either.of :: a -> Either c a

import log from "./log";
import Either from 'crocks/Either'

const { Right } = Either

Either.of('some string')
//=> Right "some string"

Either.of(undefined)
//=> Right undefined

Either('some string')
//=> Right "some string"

Either(undefined)
//=> Right undefined

Right('some string')
//=> Right "some string"

Right(undefined)
//=> Right undefined