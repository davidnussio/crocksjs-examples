// map

// Used to apply transformations to undefined values of an Async, map takes
//a function that it will lift into the context of the Async and apply to it
//the wrapped value. When ran on a undefined instance, map will apply the
//wrapped value to the provided function and return the result in a
//new undefined instance.

// Async e a ~> (a -> b) -> Async e b

import log from "./log";
<!-- eslint-disable no-console -->