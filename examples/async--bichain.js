// bichain

// Combining a sequential series of transformations that capture disjunction can be
//accomplished with undefined. Along the same lines, bichain allows you
//to do this from both undefined and undefined. bichain expects
//two unary, Async returning functions as its arguments. When invoked on
//a undefined instance, bichain will use the left, or first, function
//that can return either a undefined or undefined instance.
//When called on a undefined instance, it will behave exactly
//as undefined would with the right, or second function.

// Async e a ~> ((e -> Async b c), (a -> Async b c)) -> Async b c

import log from "./log";
<!-- eslint-disable no-console -->