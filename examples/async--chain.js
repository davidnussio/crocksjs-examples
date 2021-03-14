// chain

// Combining a sequential series of transformations that capture disjunction can be
//accomplished with chain. chain expects a unary, Async returning function
//as its argument. When invoked on a undefined instance, chain will not run
//the function, but will instead return another undefined instance wrapping the
//original undefined value. When called on a undefined instance however, the
//inner value will be passed to provided function, returning the result as the
//new instance.

// Async e a ~> (a -> Async e b) -> Async e b

import log from "./log";
<!-- eslint-disable no-console -->