// concat

// Two instances of the same n-Tuple can be combined using concatenation, as
//long as both have instances of the same Semigroups in the same
//position. concat will be called on each contained Semigroup instance with
//the instance corresponding to the other n-Tuple instance. The result of each
//concatenation will be provided in a new n-Tuple instance.

// Semigroup s1 => 1-Tuple s1 ~> 1-Tuple s1 -> 1-Tuple s1
Semigroup s1, s2 => 2-Tuple s1 s2 ~> 2-Tuple s1 s2 -> 2-Tuple s1 s2
...

import log from "./log";
import Tuple from 'crocks/Tuple'
import Sum from 'crocks/Sum'

// Triple :: 3-Tuple
const Triple =
  Tuple(3)

// Unary :: 1-Tuple
const Unary =
  Tuple(1)

Triple([ 1, 3 ], Sum(10), Sum(1))
  .concat(Triple([ 4 ], Sum.empty(), Sum(9)))
//=> 3-Tuple( [ 1, 3, 4 ], Sum 10, Sum, 10 )

Unary([ 10 ])
  .concat(Unary([ 10 ]))
//=> 1-Tuple( [ 10, 10 ] )