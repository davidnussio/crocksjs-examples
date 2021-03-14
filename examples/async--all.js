// all

// Async provides an all method that can be used when multiple, independent
//asynchronous operations need to be run in parallel. all takes
//an Array of Async instances that, when forked, will execute each instance
//in the provided Array in parallel.

// Async.all :: [ Async e a ] -> Async e [ a ]

import log from "./log";
undefined