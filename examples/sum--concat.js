// concat

// concat is used to combine (2) Semigroups of the same type under an
//operation specified by the Semigroup. In the case of Sum, it will add the
//(2) Numbers.

// Sum ~> Sum -> Sum

import log from "./log";
import Sum from 'crocks/Sum'

Sum(5)
  .concat(Sum(4))
//=> Sum 9

Sum(45)
  .concat(Sum(32))
//=> Sum 77

Sum(1000)
  .concat(Sum(Infinity))
//=> Sum Infinity

Sum(1)
  .concat(Sum(3))
//=> Sum 4