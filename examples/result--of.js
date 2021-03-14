// of

// Used to wrap any value into a Result as an undefined, of is used mostly
//by helper functions that work "generically" with instances of
//either Applicative or Monad types. When working specifically with
//the Result type, the undefined constructor should be used. Reach for of when
//working with functions that will work with ANY Applicative/Monad.

// Result.of :: a -> Result e a

import log from "./log";
import Result from 'crocks/Result'

const { Ok, of } = Result

of('Some result!')
//=> Ok "Some result!"

of(undefined)
//=> Ok undefined

Ok('Some result!')
//=> Ok "Some result!"

Ok(undefined)
//=> Ok undefined

Result('Some result!')
//=> Ok "Some result!"

Result(undefined)
//=> Ok undefined