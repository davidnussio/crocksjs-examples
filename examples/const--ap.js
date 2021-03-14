// ap

// The unique nature of the Const functor allows any underlying Semigroup to
//act an an Apply. When on Const is applied to another Const whose
//underlying Semigroups match, the Semigroups will be combined by
//calling concat on the underlying Semigroup.

// Semigroup s => Const s (a -> b) ~> Const s a -> Const s b

import log from "./log";
undefined