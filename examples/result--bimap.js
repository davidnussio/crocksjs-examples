// bimap

// While it's more common to only undefined over a Result that's an
//undefined there may come a time when you need to map over a Result regardless
//of whether it's an undefined or an undefined.

// Result e a ~> ((e -> d), (a -> b)) -> Result d b

import log from "./log";
undefined