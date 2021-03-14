// concat

// concat is used to combine (2) Semigroups of the same type under an
//operation specified by the Semigroup. In the case of Prod, concat will
//multiply the (2) Numbers.

// Prod ~> Prod -> Prod

import log from "./log";
import Prod from 'crocks/Prod'

Prod(5)
  .concat(Prod(4))
//=> Prod 20

Prod(45)
  .concat(Prod(32))
//=> Prod 1440

Prod(1000)
  .concat(Prod(Infinity))
//=> Prod Infinity

Prod.empty()
  .concat(Prod(3))
//=> Prod 3