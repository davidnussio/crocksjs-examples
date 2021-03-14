// of

// When Const is fixed to a Monoid type, we automatically get
//an Applicative implementation by creating an instance that points to
//the empty element of the underlying Monoid.

// Monoid m => Const(m).of :: a -> Const m a

import log from "./log";
undefined