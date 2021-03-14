// concat

// concat is used to combine two Semigroups of the same type under an operation
//specified by the Semigroup. In the case of Last, it will always provide the
//last non-empty value. All previous non-empty values will be thrown away and
//will always result in the last non-empty value.

// Last a ~> Last a -> Last a

import log from "./log";
import Last from 'crocks/Last'
import concat from 'crocks/pointfree/concat'

const a = Last('a')
const b = Last('b')
const c = Last('c')

a.concat(b)
//=> Last( Just "b" )

b.concat(a)
//=> Last( Just "a" )

concat(c, concat(b, a))
//=> Last( Just "c" )

concat(concat(c, b), a)
//=> Last( Just "c" )

concat(concat(a, b), c)
//=> Last( Just "a" )