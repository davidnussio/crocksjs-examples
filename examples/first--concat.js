// concat

// concat is used to combine two Semigroups of the same type under an operation
//specified by the Semigroup. In the case of First, it will always provide the
//first non-empty value. Any subsequent non-empty values will be thrown away and
//will always result in the first non-empty value.

// First a ~> First a -> First a

import log from "./log";
import First from 'crocks/First'
import concat from 'crocks/pointfree/concat'

const a = First('a')
const b = First('b')
const c = First('c')

a.concat(b)
//=> First( Just "a" )

b.concat(a)
//=> First( Just "b" )

concat(c, concat(b, a))
//=> First( Just "a" )

concat(concat(c, b), a)
//=> First( Just "a" )

concat(concat(a, b), c)
//=> First( Just "c" )