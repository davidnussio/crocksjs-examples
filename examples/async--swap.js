// swap

// Used to map the value of a undefined into a undefined or a undefined to
//a undefined, swap takes two functions as its arguments. The first function
//is used to map the expected undefined value into a undefined, while the
//second goes from undefined to undefined. If no mapping is required on either,
//then undefined functions can be used in one or both arguments.

// Async e a ~> ((e -> b), (a -> c)) -> Async c b

import log from "./log";
<!-- eslint-disable no-console -->