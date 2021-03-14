// sequence

// When an instance of Maybe wraps an Apply instance, sequence can be used to
//swap the type sequence. sequence requires either an Applicative TypeRep or
//an Apply returning function is provided for its argument. This will be used in
//the case that the Maybe instance is a Nothing.

// Apply f => Maybe (f a) ~> (b -> f b) -> f (Maybe a)
Applicative f => Maybe (f a) ~> TypeRep f -> f (Maybe a)

import log from "./log";
undefined