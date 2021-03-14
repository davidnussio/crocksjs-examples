// race

// Used to provide the first settled result between two Asyncs. Just
//pass race another Async and it will return new Async, that when forked,
//will run both Asyncs in parallel, returning the first of the two to settle.
//The result can either be rejected or resolved, based on the instance of the
//first settled result.

// Async e a ~> Async e a -> Async e a

import log from "./log";
<!-- eslint-disable no-console -->