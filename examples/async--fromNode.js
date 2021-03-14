// fromNode

// Many of the asynchronous functions that ship with Node JS provide a Continuation
//Passing Style, that requires the use of a callback function to be passed as the
//last argument. The provided callback functions are binary functions that take
//an err as the first argument, which is null when there is no error to be
//reported. The second argument is the data representing the result of the
//function in the case that there is no error present.

// NodeCallback :: (e, a) -> ()
Async.fromNode :: ((*, NodeCallback) -> ()) -> (* -> Async e a)
Async.fromNode :: (((*, NodeCallback) -> ()), ctx) -> (* -> Async e a)

import log from "./log";
undefined