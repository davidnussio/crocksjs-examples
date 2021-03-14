// coalesce

// Used to take a undefined instance and not only map its internal value,
//but also to "promote" it to a undefined instance. coalesce takes two
//unary functions as its arguments and will return a new undefined instance.

// Either c a ~> ((c -> b), (a -> b)) -> Either c b

import log from "./log";
undefined