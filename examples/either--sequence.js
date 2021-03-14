// sequence

// When an instance of Either wraps an Apply instance, sequence can be used
//to swap the type sequence. sequence requires either
//an Applicative TypeRep or an Apply returning function is provided for its
//argument. This will be used in the case that the Either instance is a undefined.

// Apply f => Either c (f a) ~> (b -> f b) -> f (Either c a)
Applicative f => Either c (f a) ~> TypeRep f -> f (Either c a)

import log from "./log";
undefined