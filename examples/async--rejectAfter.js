// rejectAfter

// Used to reject a value after a specified number of milliseconds. This function
//takes a positive Integer as its first argument and a value to reject with as
//its second. This can be used to reject and Async after a specified period
//of time. When used with undefined, the Async provided can be used
//to provide a time limit for a given Async task.

// Async.rejectAfter :: (Integer, e) -> Async e a

import log from "./log";
<!-- eslint-disable no-console -->