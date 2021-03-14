// of

// Used to wrap any value into an Async as a undefined instance, of is
//used mostly by helper functions that work "generically" with instances of
//either Applicative or Monad. When working specifically with
//the Async type, the undefined constructor should be
//used. Reach for of when working with functions that will work with
//ANY Applicative/Monad.

// Async.of :: a -> Async e a

import log from "./log";
<!-- eslint-disable no-console -->