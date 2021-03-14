// traverse

// Used to apply the "effect" of an Apply to a value in the second position of
//a Pair, traverse combines both the "effects" of the Apply and
//the Pair by returning a new instance of the Apply, wrapping the result of
//the Applys "effect" on the value in the second position of the Pair.

// Apply f => Pair a b ~> ((d -> f d), (b -> f c)) -> f (Pair a c)
Applicative f => Pair a b ~> (TypeRep f, (b -> f c)) -> f (Pair a c)

import log from "./log";
undefined