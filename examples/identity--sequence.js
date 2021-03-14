// sequence

// When an instance of Identity wraps an Apply instance, sequence can be used to
//swap the type sequence. sequence requires either an Applicative TypeRep or
//an Apply returning function to be provided for its argument.

// Apply f => Identity (f a) ~> (b -> f b) -> f (Identity a)
Applicative f => Identity (f a) ~> TypeRep f -> f (Identity a)

import log from "./log";
undefined