// bimap

// The types and values that make up an Either can vary independently in both
//the undefined and undefined instances of the Either. While undefined can be
//used to apply a transformation to a undefined instance, bimap allows
//transformations for either.

// Either c a ~> ((c -> d), (a -> b)) -> Either d b

import log from "./log";
undefined