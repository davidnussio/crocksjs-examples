// empty

// When Const is fixed to a Monoid type, we automatically get
//a Monoid implementation by creating an instance that points to
//the empty element of the underlying Monoid. As this is just a "pass through"
//of the underlying Monoid, everything valid for the underlying type, holds true
//for Const.

// Monoid m => Const(m).empty :: () -> Const m ()

import log from "./log";
undefined