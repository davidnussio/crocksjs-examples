// concat

// concat is used to combine two Semigroups of the same type under an operation
//specified by the Semigroup. When a Const instance is fixed to
//a Semigroup type, it will combine the two values that each Const points to
//using the concat method of the underlying Semigroup.

// Semigroup s => Const s a ~> Const s a -> Const s a

import log from "./log";
undefined