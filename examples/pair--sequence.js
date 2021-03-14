// sequence

// When an instance of Pair wraps an Apply instance in its second 
//position, sequence can be used to swap the type sequence. sequence requires
//either an Applicative TypeRep or an Apply returning function is provided
//for its argument.

// Apply f => Pair a (f b) ~> (c -> f c) -> f (Pair a b)
Applicative f => Pair a (f b) ~> TypeRep f -> f (Pair a b)

import log from "./log";
undefined