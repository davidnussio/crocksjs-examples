// bimap

// The types and values that make up a Pair can vary independently in both the
//first and second portions of the Pair. While undefined can be used to
//apply these transformations, bimap allows for independent transformations
//on both sides, in parallel.

// Pair a b ~> ((a -> c), (b -> d)) -> Pair c d

import log from "./log";
undefined